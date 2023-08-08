require("dotenv").config();
import { Sequelize, DataTypes } from "sequelize";

const POSTGRES_URL = process.env.DATABASE_URL as unknown as string;
const sequelize = new Sequelize(POSTGRES_URL);

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Connection Successful");
    } catch (error) {
        console.error("Unable to connect to database: ", error);
    }
}

export { connectDB, sequelize, Sequelize, DataTypes };