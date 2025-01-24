import { PrismaHistoryRepository } from "@/repositories/prisma/prisma-history-repository";
import { GetHistoriesUseCase } from "../get-histories";

export const makeGetHistoriesUseCase = () => {
  const historyRepository = new PrismaHistoryRepository();
  const getHistoriesUseCase = new GetHistoriesUseCase(historyRepository);

  return getHistoriesUseCase;
};
