import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    url: string;
    intructions: string;
};

export class Challenge extends Entity<ChallengeProps> {
    constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    public static create(props: ChallengeProps, id?:string): Challenge {
        return new Challenge(props);
    }
}