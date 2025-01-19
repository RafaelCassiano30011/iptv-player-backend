import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { registerUseCase } from "@/use-cases/register";

export const register = async (req: FastifyRequest, res: FastifyReply) => {
  const registerBodySchema = z.object({
    username: z.string(),
  });

  const { username } = registerBodySchema.parse(req.body);

  try {
    await registerUseCase({ username });
    return res.status(201).send();
  } catch (err) {
    return res.status(409).send();
  }
};
