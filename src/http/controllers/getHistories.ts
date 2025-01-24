import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetHistoriesUseCase } from "@/use-cases/factories/make-get-histories-use-case";

export const getHistories = async (req: FastifyRequest, res: FastifyReply) => {
  const getHistoryBodySchema = z.object({
    profile_id: z.string(),
  });

  const { profile_id } = getHistoryBodySchema.parse(req.params);

  try {
    const getHistoriesUseCase = makeGetHistoriesUseCase();
    const histories = await getHistoriesUseCase.execute({ profile_id });
    return res.status(200).send(histories);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }
};
