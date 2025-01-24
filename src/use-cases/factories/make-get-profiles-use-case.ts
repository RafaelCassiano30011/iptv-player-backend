import { PrismaProfileRepository } from "@/repositories/prisma/prisma-profile-repository";
import { GetProfilesUseCase } from "../get-profiles";

export function makeGetProfilesUseCase() {
  const profileRepository = new PrismaProfileRepository();
  const getProfilesUseCase = new GetProfilesUseCase(profileRepository);

  return getProfilesUseCase;
}
