import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeGetUserUseCase } from "@/use-cases/factories/make-get-user-use-case";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

export const getUser = async (req: FastifyRequest, res: FastifyReply) => {
  const getUserBodySchema = z.object({
    username: z.string(),
  });

  const { username } = getUserBodySchema.parse(req.params);

  try {
    const getUserUseCase = makeGetUserUseCase();
    const user = await getUserUseCase.execute({ username });
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(400).send({ message: err.message });
    }

    throw err;
  }
};
