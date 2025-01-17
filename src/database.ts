import { knex as setup, Knex } from 'knex';

const config: Knex.Config = {
    client: "sqlite",
    connection: {
        filename: "./db/app.db"
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: "./db/migrations"
    }
}

const knex = setup(config)

export {
    knex,
    config
}