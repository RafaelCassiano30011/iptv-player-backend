import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";

export const register = async (req: FastifyRequest, res: FastifyReply) => {
  const registerBodySchema = z.object({
    username: z.string(),
  });

  const { username } = registerBodySchema.parse(req.body);

  try {
    const registerUseCase = makeRegisterUseCase();
    await registerUseCase.execute({ username });
    return res.status(201).send();
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }
};
