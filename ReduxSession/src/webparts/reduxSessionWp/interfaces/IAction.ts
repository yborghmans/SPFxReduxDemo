import { ActionTypes } from "../actions";

export interface IAction {
    type: ActionTypes;
    data?;
}