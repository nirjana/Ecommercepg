// const configuration = {
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'postgres',
//     database: 'ecdb'
//   },
//   migrations: {
//     tableName: 'migrations',
//   },
//   seeds: {
//     directory: './seeds',
//     stub: './stub/seed.stub'
//   }
// };

// export default configuration;

const configuration = {
  client: 'pg',
  connection: {
    host: 'dpg-cfbl73pgp3jsh6b4rrvg-a',
    port: 5432,
    user: 'postgres_40kd_user',
    password: 'qFLxDKieomoww8ta8fjnbhvjwwJaxFCI',
    database: 'postgres_40kd'
  },
  migrations: {
    tableName: 'migrations',
  },
  seeds: {
    directory: './seeds',
    stub: './stub/seed.stub'
  }
};

export default configuration;