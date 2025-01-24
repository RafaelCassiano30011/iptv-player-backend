import { PrismaProfileRepository } from "@/repositories/prisma/prisma-profile-repository";
import { RegisterProfileUseCase } from "../register-profile";

export function makeRegisterProfileUseCase() {
  const profileRepository = new PrismaProfileRepository();
  const registerProfileUseCase = new RegisterProfileUseCase(profileRepository);

  return registerProfileUseCase;
}
