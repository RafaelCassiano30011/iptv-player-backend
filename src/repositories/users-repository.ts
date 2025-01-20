import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;

  findByUsername: (username: string) => Promise<User | null>;
}
