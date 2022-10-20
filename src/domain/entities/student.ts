import { Entity } from "../../core/domain/Entity";

type StudentProps = {
    url: string;
    intructions: string;
};

export class Student extends Entity<StudentProps> {
    constructor(props: StudentProps, id?: string) {
        super(props, id);
    }

    public static create(props: StudentProps, id?:string): Student {
        return new Student(props);
    }
}