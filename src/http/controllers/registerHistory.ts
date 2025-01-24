import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeRegisterHistoryUseCase } from "@/use-cases/factories/make-register-history-use-case";

export const registerHistory = async (req: FastifyRequest, res: FastifyReply) => {
  const registerHistoryBodySchema = z.object({
    media_id: z.string(),
    media_name: z.string(),
    media_image: z.string(),
    media_url: z.string(),
    media_type: z.string(),
    media_time_watched: z.string(),
    media_season: z.number().optional(),
    media_episode: z.number().optional(),
    profile_id: z.string(),
  });

  const data = registerHistoryBodySchema.parse(req.body);

  try {
    const registerHistoryUseCase = makeRegisterHistoryUseCase();
    const history = await registerHistoryUseCase.execute(data);
    return res.status(201).send(history);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }
};
