import fastify from "fastify";
import { knex } from "./database";

const app = fastify()

app.get("/hello", async (req, res) => {
    const tabels = await knex("users")

    return tabels
})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server is running on port 3333")
})