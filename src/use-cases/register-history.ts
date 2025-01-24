import { HistoryRepository } from "@/repositories/history-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface HistoryUseCaseProps {
  media_id: string;
  media_name: string;
  media_image: string;
  media_url: string;
  media_type: string;
  media_time_watched: string;
  season?: number | null;
  episode?: number | null;
  profile_id: string;
}

export class RegisterHistoryUseCase {
  constructor(private HistoryRepository: HistoryRepository) {}

  execute(data: HistoryUseCaseProps) {
    const history = this.HistoryRepository.create(data);

    if (!history) {
      throw new ResourceNotFoundError();
    }

    return history;
  }
}
