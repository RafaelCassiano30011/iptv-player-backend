import type { Knex } from "knex";
import { v4 as uuid } from 'uuid'; // Importando a biblioteca UUID para gerar IDs únicos


export async function up(knex: Knex): Promise<void> {
    // Criando a tabela profile
    await knex.schema.createTable("profile", (table) => {
        table.uuid("id").primary().defaultTo(knex.fn.uuid())
        table.string("name").notNullable();
        table.uuid("user_id").references("id").inTable("users");
        table.timestamp("date_included").notNullable().defaultTo(knex.fn.now());
        table.timestamp("date_update").notNullable().defaultTo(knex.fn.now());
    });

    // Criando a tabela history
    await knex.schema.createTable("history", (table) => {
        table.uuid("id").primary().defaultTo(knex.fn.uuid())
        table.timestamp("date_included").notNullable().defaultTo(knex.fn.now());
        table.timestamp("date_update");
        table.string("name").notNullable();


        table.uuid("profile_id").references("id").inTable("profile");
        table.uuid("media_id").notNullable();
        table.string("media_type").notNullable();

        table.timestamp("last_updated").notNullable().defaultTo(knex.fn.now());
        table.string("season");
        table.string("episode");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("profile");
    await knex.schema.dropTable("history");
}
