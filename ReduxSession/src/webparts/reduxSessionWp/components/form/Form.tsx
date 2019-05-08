
import * as React from 'react';
import {
    TextField,
    Button,
    ButtonType,
    autobind
} from 'office-ui-fabric-react';

import { connect } from 'react-redux';
import { IApplicationState } from '../../interfaces/IApplicationState';
import { AddNewSession } from '../../actions';

const mapStateToProps = (state: IApplicationState) => ({
});


const mapDispatchToProps = (dispatch): ISessionListDispatch => ({
    AddNewSession: (value) => {
        dispatch(AddNewSession(value));
    },
});

export interface ISessionListDispatch {
    AddNewSession: (value) => void;
}

export interface IAddSessionProp {
}

export interface IAddSessionState {
    title: string;
    speaker: string;
}


class AddSession extends React.Component<ISessionListDispatch & IAddSessionProp, IAddSessionState> {
    private _placeHolderTitle: string = 'Add a new session';
    private _placeHolderSpeaker: string = 'Add a new speaker';

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            speaker: ''
        };
    }


    public render(): React.ReactElement<IAddSessionProp> {
        return (
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm7 ms-md7 ms-lg7">
                        <TextField
                            value={this.state.title}
                            autoComplete='off'
                            onChanged={this._handleTitleChange}
                            placeholder={this._placeHolderTitle}
                        /></div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <TextField
                            value={this.state.speaker}
                            autoComplete='off'
                            onChanged={this._handleSpeakerChange}
                            placeholder={this._placeHolderSpeaker}
                        /></div>

                    <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1">
                        <Button
                            buttonType={ButtonType.primary}
                            ariaLabel='Add a todo task'
                            onClick={e => {

                                this.props.AddNewSession({ title: this.state.title, speaker: this.state.speaker })
                                this.setState({
                                    title: this._placeHolderTitle,
                                    speaker: this._placeHolderSpeaker
                                });
                            }}>
                            Add                        </Button>
                    </div>
                </div>

            </div >
        );
    }

    @autobind
    private _handleTitleChange(newValue: string) {
        this.setState({
            title: newValue
        });
    }
    @autobind
    private _handleSpeakerChange(newValue: string) {
        this.setState({
            speaker: newValue
        });
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSession);
