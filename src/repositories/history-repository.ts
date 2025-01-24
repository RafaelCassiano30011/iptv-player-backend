import { Prisma, History } from "@prisma/client";

export interface HistoryRepository {
  create(data: Prisma.HistoryUncheckedCreateInput): Promise<History>;

  getHistoriesByProfileId: (profile_id: string) => Promise<History[] | null>;
}
