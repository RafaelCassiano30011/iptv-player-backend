import { ProfileRepository } from "@/repositories/profile-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface ProfileUseCaseProps {
  user_id: string;
}

export class GetProfilesUseCase {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({ user_id }: ProfileUseCaseProps) {
    const profiles = await this.profileRepository.findProfilesByUserId(user_id);

    if (!profiles) {
      throw new ResourceNotFoundError();
    }

    return { profiles };
  }
}
