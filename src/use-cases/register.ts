import { prisma } from "@/lib/prisma";
import { UsersRepository } from "@/repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists";

interface RegisterUseCaseProps {
  username: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ username }: RegisterUseCaseProps) {
    const userWithUsername = await this.usersRepository.findByUsername(username);

    if (userWithUsername) {
      throw new UserAlreadyExistsError();
    }

    await this.usersRepository.create({
      username,
    });
  }
}
