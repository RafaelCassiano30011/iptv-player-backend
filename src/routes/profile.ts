import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";

const profileRoutes = async (app: FastifyInstance) => {
  app.get("/", async (req, res) => {
    const profileSchema = z.object({
      username: z.string(),
    });

    const query = profileSchema.parse(req.query);

    const user = await knex("profile").where({
      username: query.username,
    });

    return user;
  });

  app.post("/", async (req, res) => {
    const profileSchema = z.object({
      username: z.string(),
    });

    const body = profileSchema.parse(req.body);

    await knex("profile").insert({
      name: body.username,
    });

    return res.status(201).send();
  });
};

export { profileRoutes as profileSRoutes };
