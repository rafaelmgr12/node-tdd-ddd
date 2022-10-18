import { Entity } from "core/domain/Entity";

type CorrectionProps = {
    grade: number;

    submissionId: string;
};

class Correction extends Entity<CorrectionProps> {
    constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }
}