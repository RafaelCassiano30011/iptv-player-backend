import { HistoryRepository } from "@/repositories/history-repository";

interface HistoryUseCaseProps {
  profile_id: string;
}

export class GetHistoriesUseCase {
  constructor(private HistoryRepository: HistoryRepository) {}

  execute({ profile_id }: HistoryUseCaseProps) {
    const histories = this.HistoryRepository.getHistoriesByProfileId(profile_id);

    return histories;
  }
}
