import { PrismaHistoryRepository } from "@/repositories/prisma/prisma-history-repository";
import { RegisterHistoryUseCase } from "../register-history";

export const makeRegisterHistoryUseCase = () => {
  const historyRepository = new PrismaHistoryRepository();
  const registerHistoryUseCase = new RegisterHistoryUseCase(historyRepository);

  return registerHistoryUseCase;
};
