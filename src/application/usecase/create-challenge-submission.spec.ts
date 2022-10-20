import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create Challenge Submission use case", () => {
  it("should create a new challenge submission", async () => {
    const sut = new CreateChallengeSubmission();

    const response = await sut.execute({
      studentId: "any_student_id",
      challengeId: "any_challenge_id",
    });

    expect(response).toBeTruthy();
  });
});
