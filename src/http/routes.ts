import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";

const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", register);
};

export { appRoutes };
