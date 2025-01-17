import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";

const userRoutes = async (app: FastifyInstance) => {
  app.get("/", async (req, res) => {
    const userSchema = z.object({
      username: z.string(),
    });

    const query = userSchema.parse(req.query);

    const user = await knex("users").where({
      username: query.username,
    });

    return user;
  });

  app.post("/", async (req, res) => {
    const userSchema = z.object({
      username: z.string(),
    });

    const body = userSchema.parse(req.body);

    await knex("users").insert({
      username: body.username,
    });

    return res.status(201).send();
  });
};

export { userRoutes as usersRoutes };
