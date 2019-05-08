import { IAction } from "../interfaces/IAction";

export enum ActionTypes {
    AddSession,
    RemoveSession
}



export function AddNewSession(value: any): IAction {
    return {
        type: ActionTypes.AddSession,
        data: value
    }
}
export function RemoveSession(value: any) {
    console.log("Removing session => " + value);
    return {
        type: ActionTypes.RemoveSession,
        data: value
    }
}