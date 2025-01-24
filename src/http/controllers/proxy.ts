import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import axios from "axios";

export const proxy = async (req: FastifyRequest, res: FastifyReply) => {
  const proxyBodySchema = z.object({
    request: z.string(),
  });

  const { request } = proxyBodySchema.parse(req.body);

  try {
    const response = await axios.get(request);

    return res.status(200).send(response.data);
  } catch (e: { message: string }) {
    return res.status(400).send({ message: e.message, request });
  }
};
