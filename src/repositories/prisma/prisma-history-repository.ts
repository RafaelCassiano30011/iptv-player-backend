import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { HistoryRepository } from "../history-repository";

export class PrismaHistoryRepository implements HistoryRepository {
  async create(data: Prisma.HistoryUncheckedCreateInput) {
    const history = await prisma.history.create({
      data,
    });

    return history;
  }

  async getHistoriesByProfileId(profile_id: string) {
    const histories = await prisma.history.findMany({
      where: {
        profile_id,
      },
    });

    return histories;
  }
}
