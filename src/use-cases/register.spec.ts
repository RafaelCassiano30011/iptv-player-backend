import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists";
import exp from "constants";

describe("Register use Case", () => {
  it("should register a user", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const {
      user: { id },
    } = await registerUseCase.execute({ username: "test" });

    expect(id).toEqual(expect.any(String));
  });

  it("user already exist", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const username = "test";

    await registerUseCase.execute({ username });

    await expect(() => registerUseCase.execute({ username })).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
