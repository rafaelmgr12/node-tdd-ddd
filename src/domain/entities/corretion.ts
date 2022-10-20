import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number;

    submissionId: string;
};

export class Correction extends Entity<CorrectionProps> {
    constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }

    public static create(props: CorrectionProps, id?:string): Correction {
        return new Correction(props);
    }
}