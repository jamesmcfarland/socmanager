import { NextResponse } from "next/server";
import "dotenv/config";
import { connect } from "@planetscale/database";
const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};
export async function POST(request: Request) {
  const data = await request.json();

  if (!data.organisationName || !data.organisationType) {
    return NextResponse.error();
  }

  console.log(
    "Server RX | POST | /api/organisation/create/route.ts, data: ",
    data
  );

  console.log("Server | CreateOrganisation | Connecting to planetscale");

  const conn = connect(config);
  const results = await conn.execute(
    "INSERT INTO organisations (organisationName, organisationType) VALUES (?, ?);   ",
    [data.organisationName, data.organisationType]
  );

  console.log("Server | CreateOrganisation | results: ", results);
  if (results.rowsAffected === 0) {
    return NextResponse.error();
  }

  return NextResponse.json({ id: results.insertId });
}
