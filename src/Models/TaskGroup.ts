interface TaskGroupBase<T> {
    Id: number;
    Name: string;
    OpenDate: Date;
    CloseDate: Date;
    Tasks: Array<T>
}

enum TaskGroupAssign {
    All,
    Random,
    Teacher,
    Student
}

interface TaskGroup extends TaskGroupBase<Task> {
    AssignType: TaskGroupAssign;
}

enum KNTestAssign {
    Teacher,
    Student,
    Training,
    eLearning
}

interface KNTest extends TaskGroupBase<Task> {
    AssignType: KNTestAssign;
}

interface ExtraPoint extends TaskGroupBase<Task> {

}
