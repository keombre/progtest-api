import { ExtraPoint, KNTest, TaskGroup } from ".";

export interface AssignmentGroup {
    Id: number;
    Name: string;

    TaskGroups: Array<TaskGroup>;
    KNTests: Array<KNTest>;
    ExtraPoints: Array<ExtraPoint>;
}
