import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { getUser } from "./controllers/getUser";
import { registerProfile } from "./controllers/registerProfile";
import { getProfile } from "./controllers/getProfile";
import { registerHistory } from "./controllers/registerHistory";
import { getHistories } from "./controllers/getHistories";

const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", register);
  app.post("/profile", registerProfile);
  app.post("/history", registerHistory);

  app.get("/users/:username", getUser);
  app.get("/profile/:user_id", getProfile);
  app.get("/history/:profile_id", getHistories);
};

export { appRoutes };
