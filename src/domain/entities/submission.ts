import { Entity } from "core/domain/Entity";

type SubmissionProps = {
    grade: number;

    submissionId: string;
};

export class Submission extends Entity<SubmissionProps> {
    constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }

    public static create(props: SubmissionProps, id?:string): Submission {
        return new Submission(props);
    }
}