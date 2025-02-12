import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaFilePath = path.join(__dirname, "paper-route-schema.sql");

const command = `psql ${process.env.DATABASE_URL} -f ${schemaFilePath} --set=sslmode=require`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing schema file: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
