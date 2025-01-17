import type { Knex } from "knex";



export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.uuid("id").primary().defaultTo(knex.fn.uuid())
        table.string("username").index().unique().notNullable();
        table.timestamp("date_included").notNullable().defaultTo(knex.fn.now()); // Data de inclusão automática
        table.timestamp("date_update").notNullable().defaultTo(knex.fn.now()); // Última atualização

    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('users')
}

