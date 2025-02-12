import { exec } from "child_process";
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const seedFilePath = join(__dirname, "paper-route-seed.sql");
const caCertPath = join(__dirname, "ca.crt");

// Check if the CA certificate file exists
if (!existsSync(caCertPath)) {
  console.error(`Error: CA certificate file not found at ${caCertPath}`);
  process.exit(1);
}

// Read the CA certificate from the file
const caCert = readFileSync(caCertPath).toString();

const command = `psql ${process.env.DATABASE_URL} -f ${seedFilePath} --set=sslmode=require --set=sslrootcert=${caCertPath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing seed file: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
