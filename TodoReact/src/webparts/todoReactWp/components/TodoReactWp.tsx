import * as React from 'react';
import styles from './TodoReactWp.module.scss';
import { ITodoReactWpProps } from './ITodoReactWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';
import Form from './Form/Form';
import TodoList from './List/SessionList';
import { autobind } from 'office-ui-fabric-react';
import SessionList from './List/SessionList';
import ISession from '../interfaces/ISession';

export interface ITodoReactWPState {
  sessionItems?: ISession[];
}

export default class TodoReactWp extends React.Component<ITodoReactWpProps, ITodoReactWPState> {
  constructor(props: ITodoReactWpProps) {
    super(props);
    this.state = {
      sessionItems: null
    }
  }

  public componentDidMount(): void {
    this._RetrieveItems();
  }

  public render(): React.ReactElement<ITodoReactWpProps> {
    return (
      <div className={styles.todoReactWp}>
        <div className="ms-Grid-row">
          <h1>Session list SPS Doha</h1>
        </div>
        <div className="ms-Grid-row">
          <SessionList
            sessionItems={this.state.sessionItems}
            handleDelete={this._deleteItem}
          />
        </div>
        <div className="ms-Grid-row">
          <Form handleAddItem={this._AddItem} />
        </div>
      </div>
    );
  }

  @autobind
  private async _RetrieveItems() {
    this.props.httpClient.get("https://spsdohaapi.azurewebsites.net/api/values", HttpClient.configurations.v1)
      .then((data: HttpClientResponse) => data.json())
      .then((data: any) => {
        this.setState({
          sessionItems: data
        });
      });
  }

  @autobind
  private _AddItem(session: ISession) {
    var sessionItems = this.state.sessionItems;
    sessionItems.push(session);
    this.setState({ sessionItems: sessionItems });
  }

  @autobind
  private _deleteItem(session: ISession) {
    this.setState(prevState => ({
      sessionItems: prevState.sessionItems.filter(el => el.title != session.title && el.speaker != session.title)
    }));
  }
}
