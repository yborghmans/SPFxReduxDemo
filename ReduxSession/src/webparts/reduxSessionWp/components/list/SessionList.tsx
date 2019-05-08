import SessionItem from "../session/SessionItem";
import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from "../../interfaces/IApplicationState";
import { ISession } from "../../interfaces/ISession";



const mapStateToProps = (state: IApplicationState) => ({
    sessionItems: state.sessionItems
});

export interface ISessionListProp {
    sessionItems: ISession[];
    onDelete: any;
}

export interface ISessionListDispatch {

}
const mapDispatchToProps = (dispatch): ISessionListDispatch => ({
});

class SessionList extends React.Component<ISessionListDispatch & ISessionListProp, {}> {
    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<ISessionListProp> {
        return (
            <div >


                {
                    this.props.sessionItems.length > 0 ?
                        this.props.sessionItems.map(item => {
                            return <SessionItem title={item.title} speaker={item.speaker} onDeleteItem={this.props.onDelete} ></SessionItem>
                        })

                        :
                        <p>empty</p>
                }

            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionList);
