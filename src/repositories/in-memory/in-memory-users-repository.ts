import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: String(this.users.length + 1),
      username: data.username,
      createdAt: new Date(),
      created_at: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async findByUsername(username: string) {
    return this.users.find((user) => user.username === username) || null;
  }
}
