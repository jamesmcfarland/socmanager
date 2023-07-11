import * as postgres from "https://deno.land/x/postgres@v0.14.2/mod.ts";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Get the connection string from the environment variable "SUPABASE_DB_URL"
const databaseUrl = Deno.env.get("SUPABASE_DB_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);

serve(async (_req) => {
  try {
    // Grab a connection from the pool
    const connection = await pool.connect();

    const { id } = await _req.json();

    try {
      // Run a query
      const result = await connection.queryObject`WITH member_data AS (
        SELECT
            m.id,
            m.name,
            m.email,
            m.organisationId,
            o.organisationname,
                o.organisationcreationdate,
            m.joinDate,
            o.organisationType
        FROM
            members AS m
        JOIN
            organisations AS o ON m.organisationId = o.id
        WHERE
            m.organisationId = ${id}
    )
    SELECT
        md.id,
        md.name,
        md.email,
        md.joinDate,
        md.organisationName,
        md.organisationType,
        md.organisationcreationdate,
        CASE
            WHEN md.organisationType = 'community' THEN cm.phoneNumber
            ELSE NULL
        END AS communityPhoneNumber,
        CASE
            WHEN md.organisationType = 'university' THEN um.studentNumber
            ELSE NULL
        END AS universityStudentNumber,
        CASE
            WHEN md.organisationType = 'university' THEN um.course
            ELSE NULL
        END AS universityCourse,
        CASE
            WHEN md.organisationType = 'university' THEN um.year
            ELSE NULL
        END AS universityYear,
        CASE
            WHEN md.organisationType = 'university' THEN um.type
            ELSE NULL
        END AS universityType,
        CASE
            WHEN md.organisationType = 'office' THEN om.phoneNumber
            ELSE NULL
        END AS officePhoneNumber
    FROM
        member_data AS md
    LEFT JOIN
        community_members AS cm ON md.id = cm.id
    LEFT JOIN
        university_members AS um ON md.id = um.id
    LEFT JOIN
        office_members AS om ON md.id = om.id;
    
       `;
      const animals = result.rows; // [{ id: 1, name: "Lion" }, ...]
      console.log(animals);

      // Encode the result as pretty printed JSON
      const body = JSON.stringify(
        animals,
        (key, value) => (typeof value === "bigint" ? value.toString() : value),
        2
      );

      // Return the response with the correct content type header
      return new Response(body, {
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
    return new Response(String(err?.message ?? err), { status: 500 });
  }
});
