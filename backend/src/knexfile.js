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