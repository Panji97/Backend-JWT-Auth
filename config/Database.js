import { Sequelize } from "sequelize";

const db = new Sequelize("Auth_db", "root", "", {
  host: "https://backend-jwt-auth.herokuapp.com/",
  dialect: "mysql",
});

export default db;
