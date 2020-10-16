interface AssignmentGroup {
    Id: number;
    Name: string;

    TaskGroups: Array<TaskGroup>;
    KNTests: Array<KNTest>;
    ExtraPoints: Array<ExtraPoint>;
}
