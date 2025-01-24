import { Prisma, Profile } from "@prisma/client";

export interface ProfileRepository {
  create(data: Prisma.ProfileUncheckedCreateInput): Promise<Profile>;

  findProfilesByUserId: (user_id: string) => Promise<Profile[] | null>;

  findProfileById: (id: string) => Promise<Profile | null>;
}
