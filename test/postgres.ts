import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "user",
  database: "test",
  hostname: "localhost",
  port: 5432
});
await client.connect();
const result = await client.query("SELECT * FROM test;");
console.log(result.rows);
await client.end();
