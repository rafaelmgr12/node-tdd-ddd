import { InMemoryChallengesRepository } from "../../test/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../test/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create Challenge Submission use case", () => {
  it("should create a new challenge submission", async () => {
    const studentRepository = new InMemoryStudentsRepository()
    const challengeRepository = new InMemoryChallengesRepository()
    
    const sut = new CreateChallengeSubmission(studentRepository, challengeRepository);

    const response = await sut.execute({
      studentId: "any_student_id",
      challengeId: "any_challenge_id",
    });

    expect(response).toBeTruthy();
  });
});
