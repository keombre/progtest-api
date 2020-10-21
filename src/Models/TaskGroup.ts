import { Task } from ".";

export interface TaskGroupBase<T> {
    Id: number;
    Name: string;
    OpenDate: Date;
    CloseDate: Date;
    IsOpen: boolean;
    Tasks: () => Array<T>
}

export enum TaskGroupAssign {
    All,
    Random,
    Teacher,
    Student
}

export interface TaskGroup extends TaskGroupBase<Task> {
    AssignType: TaskGroupAssign;
}

export enum KNTestAssign {
    Teacher,
    Student,
    Training,
    eLearning
}

export interface KNTest extends TaskGroupBase<Task> {
    AssignType: KNTestAssign;
}

export interface ExtraPoint extends TaskGroupBase<Task> {

}
