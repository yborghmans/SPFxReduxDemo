import { createStore, applyMiddleware,
    AnyAction,Store // 'unused' but needs to be defined
 } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

//  'unused' but needs to be defined
import { IApplicationState } from '../interfaces/IApplicationState';
import { ThunkDispatch } from 'redux-thunk';


export default function configureStore() {
    return  createStore(
        reducer,
        applyMiddleware(thunk)
    );
}