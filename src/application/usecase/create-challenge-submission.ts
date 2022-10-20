import { Submission } from "../../domain/entities/submission";
import { ChallengeRepository } from "../repositories/ChallengeRepository";
import { StudentRepository } from "../repositories/StudentRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  constructor(
    private studentRepository: StudentRepository,
    private challengeRepository: ChallengeRepository
  ) {}

  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = this.studentRepository.findById(studentId);
    const challenge = this.challengeRepository.findById(challengeId);
    if (!student) {
      throw new Error("Student not found");
    }
    if (!challenge) {
        throw new Error("Challenge not found");
    }

    const submission = Submission.create({ studentId, challengeId });

    return submission;
  }
}
