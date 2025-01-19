import { prisma } from "@/lib/prisma";

interface RegisterUseCaseProps {
  username: string;
}

export const registerUseCase = async ({ username }: RegisterUseCaseProps) => {
  const userWithUsername = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userWithUsername) {
    throw new Error("Username already exists");
  }

  await prisma.user.create({
    data: {
      username,
    },
  });
};
