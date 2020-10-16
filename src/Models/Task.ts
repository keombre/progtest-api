interface Task {
    Id: number;
    Name: string;

    Score: number;
    MaxScore: number;

    MaxSolutions: number;
    MaxSolutionsPenalty: number;

    Solutions: Array<Solution>;
    ReferenceSolution: Solution;

    Text: string;

    SampleData: Array<string>;
}
