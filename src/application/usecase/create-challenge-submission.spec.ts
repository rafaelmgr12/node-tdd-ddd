import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesRepository } from "../../test/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../test/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create Challenge Submission use case", () => {
  it("should create a new challenge submission", async () => {
    const studentRepository = new InMemoryStudentsRepository();
    const challengeRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: "John Doe",
      email: "doe@example.com",
    });

    const challenge = Challenge.create({
      title: "Test Challenge",
      instructionsUrl: "Test instructions",
    });

    studentRepository.items.push(student);
    challengeRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(
      studentRepository,
      challengeRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
