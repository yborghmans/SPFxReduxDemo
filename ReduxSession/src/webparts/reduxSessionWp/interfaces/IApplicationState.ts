import { List } from "lodash";
import { ISession } from "./ISession";

export interface IApplicationState {
    sessionItems: ISession[];
}