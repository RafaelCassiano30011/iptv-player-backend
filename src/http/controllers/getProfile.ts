import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeGetProfilesUseCase } from "@/use-cases/factories/make-get-profiles-use-case";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

export const getProfile = async (req: FastifyRequest, res: FastifyReply) => {
  const getProfileBodySchema = z.object({
    user_id: z.string(),
  });

  const { user_id } = getProfileBodySchema.parse(req.params);

  try {
    const getProfilesUseCase = makeGetProfilesUseCase();
    const profiles = await getProfilesUseCase.execute({ user_id });
    return res.status(200).send(profiles);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(400).send({ message: err.message });
    }

    throw err;
  }
};
