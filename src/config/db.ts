import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const db = new Sequelize(process.env.DB_URL, {
    models: [__dirname + '/../models/**/*.ts']
});


export default db;