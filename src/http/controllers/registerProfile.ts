import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeRegisterProfileUseCase } from "@/use-cases/factories/make-register-profile-use-case";

export const registerProfile = async (req: FastifyRequest, res: FastifyReply) => {
  const registerProfileBodySchema = z.object({
    name: z.string(),
    user_id: z.string(),
  });

  const { name, user_id } = registerProfileBodySchema.parse(req.body);

  try {
    const registerProfileUseCase = makeRegisterProfileUseCase();
    const profile = await registerProfileUseCase.execute({ name, user_id });
    return res.status(201).send(profile);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }
};
