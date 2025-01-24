import { UsersRepository } from "@/repositories/users-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetUserUseCaseProps {
  username: string;
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ username }: GetUserUseCaseProps) {
    const user = await this.usersRepository.findByUsername(username.toLocaleLowerCase());

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return { user };
  }
}
