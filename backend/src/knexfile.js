const configuration = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'ecdb'
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

// const configuration = {
//   client: 'pg',
//   connection: {
//     host: 'dpg-cfbckh82i3mjdult2ghg-a',
//     port: 5432,
//     user: 'postgres_i9r4_user',
//     password: 'SGN2uA2ByFq5bPzs4xqGmbUi0CX47anO',
//     database: 'postgres_i9r4'
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