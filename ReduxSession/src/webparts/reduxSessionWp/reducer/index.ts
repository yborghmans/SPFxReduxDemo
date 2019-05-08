import { IApplicationState } from "../interfaces/IApplicationState";
import { Reducer } from "redux";
import { IAction } from "../interfaces/IAction";
import { clone } from "@microsoft/sp-lodash-subset";
import { ActionTypes } from "../actions";

const initialState: IApplicationState = {
    sessionItems: []
}

const reducer: Reducer<IApplicationState> = (state: IApplicationState = initialState, action: IAction): IApplicationState => {
    var newState: IApplicationState = clone(state);
    switch (action.type) {
        case ActionTypes.AddSession:
            newState.sessionItems = [...newState.sessionItems, action.data];
            break;
        case ActionTypes.RemoveSession:
            newState.sessionItems = newState.sessionItems.filter(el => el.title != action.data.title)
            break;
        default:
            break;

    }
    return newState;
};

export default reducer;