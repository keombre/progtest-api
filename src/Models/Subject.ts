interface Subject {
    Id: number;
    Name: string;
    FullName: string;

    SyllabusLink: URL;
    Icon: string;

    AssignmentGroups: Array<AssignmentGroup>;
}
