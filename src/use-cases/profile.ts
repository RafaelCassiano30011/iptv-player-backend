import { ProfileRepository } from "@/repositories/profile-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface ProfileUseCaseProps {
  user_id: string;
  name: string;
}

export class ProfileUseCase {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({ user_id, name }: ProfileUseCaseProps) {
    const profile = await this.profileRepository.create({
      name,
      user_id,
    });
  }
}
