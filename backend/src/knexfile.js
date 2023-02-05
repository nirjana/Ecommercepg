import Knex from "knex";

const configuration = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5433,
    user: "postgres",
    password: "admin123",
    database: "ecdb12",
  },
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: "./seeds",
    stub: "./stub/seed.stub",
  },
};
export const connection = Knex(configuration);
export default configuration;

// const configuration = {
//   client: "pg",
//   connection: {
//     host: "dpg-cfdmohhgp3jolcljt72g-a.singapore-postgres.render.com",
//     port: 5432,
//     user: "pop_2tc6_user",
//     password: "OnFA0JZGoUhHngHcsxK5jBuntcUGGEMb",
//     database: "pop_2tc6",

//     keepAlive: true,
//     timeout: 60000, // increased timeout to 60 seconds
//   },
//   pool: {
//     min: 0,
//     max: 50,
//   },
//   migrations: {
//     tableName: "migrations",
//   },
//   seeds: {
//     directory: "./seeds",
//     stub: "./stub/seed.stub",
//   },
// };

// export default configuration;

// //ELEPHANT
// const configuration = {
//   client: "pg",
//   connection: {
//     host: "satao.db.elephantsql.com",
//     port: 5432,
//     user: "ixfkndjf",
//     password: "pai8KiXmaa-ObCf32QNLfPddm1MpoOJ0",
//     database: "ixfkndjf",
//   },
//   migrations: {
//     tableName: "migrations",
//   },
//   seeds: {
//     directory: "./seeds",
//     stub: "./stub/seed.stub",
//   },
// };
// export const connection = Knex(configuration);
// export default configuration;
