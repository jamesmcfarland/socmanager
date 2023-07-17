import * as postgres from "https://deno.land/x/postgres@v0.14.2/mod.ts";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

// Get the connection string from the environment variable "SUPABASE_DB_URL"
const databaseUrl = Deno.env.get("SUPABASE_DB_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);

serve(async (_req) => {
  if (_req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const data = await _req.json();
  try {
    // Grab a connection from the pool
    const connection = await pool.connect();

    try {
      if (!data.id) {
        //Adding a new member
        console.log("Adding a new member");

        const date = new Date().toISOString();

        await connection.queryObject`INSERT INTO members (name, email, organisationId, joinDate) VALUES (${data.name}, ${data.email}, ${data.organisationId}, ${date})`;

        const result =
          await connection.queryObject`SELECT * FROM members WHERE email = ${data.email} AND organisationId = ${data.organisationId} AND joinDate = ${date}`;
        const member: any = result.rows[0];

        switch (data.organisationType) {
          case "community": {
            const _result = await connection.queryObject`
                        INSERT INTO community_members (id, phoneNumber)
                        VALUES (${member.id}, ${data.phoneNumber})`;
            const community = _result.rows[0];
            console.log(community);
            break;
          }
          case "university": {
            const __result = await connection.queryObject`
                            INSERT INTO university_members (id, studentNumber, course, year, type)
                            VALUES (${member.id}, ${data.studentNumber}, ${data.course}, ${data.year}, ${data.type})`;
            const university = __result.rows[0];
            console.log(university);
            break;
          }
          case "office": {
            const ___result = await connection.queryObject`

                                INSERT INTO office_members (id, phoneNumber)
                                VALUES (${member.id}, ${data.phoneNumber})`;
            const office = ___result.rows[0];
            console.log(office);
            break;
          }
        }
        return new Response(JSON.stringify(member), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });
      }

      //Edit existing member
      console.log("Editing existing member");
      const result =
        await connection.queryObject`UPDATE members SET name = ${data.name}, email = ${data.email}, organisationId = ${data.organisationId}, joinDate = ${data.joinDate} WHERE id = ${data.id}`;
      const member: any = result.rows[0];

      switch (data.organisationType) {
        case "community": {
          const _result = await connection.queryObject`
                        UPDATE community_members SET phoneNumber = ${data.phoneNumber} WHERE id = ${data.id}`;
          const community = _result.rows[0];
          console.log(community);

          break;
        }
        case "university": {
          const __result = await connection.queryObject`


                            UPDATE university_members SET studentNumber = ${data.studentNumber}, course = ${data.course}, year = ${data.year}, type = ${data.type} WHERE id = ${data.id}`;
          const university = __result.rows[0];
          console.log(university);
          break;
        }
        case "office": {
          const ___result = await connection.queryObject`

                                UPDATE office_members SET phoneNumber = ${data.phoneNumber} WHERE id = ${data.id}`;
          const office = ___result.rows[0];
          console.log(office);
          break;
        }
      }
      return new Response(JSON.stringify(member), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    } finally {
      // Release the connection back into the pool
      connection.release();
    }
  } catch (err) {
    console.error(err);
    console.error(data);
    return new Response(String(err?.message ?? err), { status: 400 });
  }
});
