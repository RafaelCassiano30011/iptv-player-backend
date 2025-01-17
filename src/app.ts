import fastify from "fastify";
import { env } from "./env";
import { usersRoutes } from "./routes/users";

const app = fastify();

app.register(usersRoutes, {
  prefix: "user",
});

export { app };
