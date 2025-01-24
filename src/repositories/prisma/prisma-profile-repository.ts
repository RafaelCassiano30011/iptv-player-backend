import { Prisma } from "@prisma/client";
import { ProfileRepository } from "../profile-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProfileRepository implements ProfileRepository {
  async create(data: Prisma.ProfileUncheckedCreateInput) {
    const profile = await prisma.profile.create({
      data,
    });

    return profile;
  }

  async findProfilesByUserId(user_id: string) {
    const profile = await prisma.profile.findMany({
      where: {
        user_id: user_id,
      },
    });

    return profile;
  }

  async findProfileById(id: string) {
    const profile = await prisma.profile.findUnique({
      where: {
        id,
      },
    });

    return profile;
  }
}
