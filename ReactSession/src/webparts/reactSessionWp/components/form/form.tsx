import * as React from 'react';
import styles from '../ReactSessionWp.module.scss';
import {
    TextField,
    Button,
    ButtonType
} from 'office-ui-fabric-react';
import { autobind } from '@uifabric/utilities';

export interface IFormProps {
    handleAddItem: any;
}

export interface IFormState {
    title: string;
    speaker: string;
}

export default class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            title: "",
            speaker: ""
        };
    }
    public render(): React.ReactElement<IFormProps> {
        return (
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <TextField
                            value={this.state.title}
                            autoComplete='off'
                            onChanged={this._handleTitleChange}
                            placeholder="Add a new session title"
                        /></div>
                    <div className="ms-Grid-col ms-sm4 ms-md3 ms-lg4">
                        <TextField
                            value={this.state.speaker}
                            autoComplete='off'
                            onChanged={this._handleSpeakerChange}
                            placeholder="Add a new speaker"
                        /></div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1">
                        <Button
                            buttonType={ButtonType.primary}
                            ariaLabel='Add a todo task'
                            onClick={this._handleAddButtonClick}>
                            Add
                        </Button>
                    </div>
                </div>

            </div >
        );
    }
    @autobind
    private _handleAddButtonClick(event?: React.MouseEvent<HTMLButtonElement>) {
        if (this.state.title == "" || this.state.speaker == "") return;

        this.setState({
            title: "",
            speaker: ""
        });
        this.props.handleAddItem({ title: this.state.title, speaker: this.state.speaker });
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
