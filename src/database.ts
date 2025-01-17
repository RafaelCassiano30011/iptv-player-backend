import { env } from "./env";
import { knex as setup, Knex } from "knex";

const config: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

const knex = setup(config);

export { knex, config };
