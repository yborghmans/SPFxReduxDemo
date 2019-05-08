
import * as React from 'react';

import { connect } from 'react-redux';
import { IApplicationState } from '../../interfaces/IApplicationState';
import { RemoveSession } from '../../actions';

const mapStateToProps = (state: IApplicationState) => ({
    sessionItems: state.sessionItems
});

export interface ISessionListProp {

}
const mapDispatchToProps = (dispatch): ISessionListDispatch => ({
    RemoveSession: (value) => {
        dispatch(RemoveSession(value));
    },
});

export interface ISessionListDispatch {
    RemoveSession: (value) => void;
}

class SessionItem extends React.Component<ISessionListDispatch & ISessionItemProp, {}> {


    public render(): React.ReactElement<ISessionItemProp> {
        return (
            <div >
                <li>{this.props.title} ({this.props.speaker})<span onClick={e => {
                    console.log('delete clicked')
                    this.props.RemoveSession({ title: this.props.title, speaker: this.props.speaker });
                }}> X </span></li>
            </div>
        );
    }

    private _handleDelete(event?: React.MouseEvent<HTMLButtonElement>) {
        this.props.RemoveSession({ title: this.props.title, speaker: this.props.speaker });
    }
}

export interface ISessionItemProp {
    title: string;
    speaker: string;
    onDeleteItem: any;
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionItem);
