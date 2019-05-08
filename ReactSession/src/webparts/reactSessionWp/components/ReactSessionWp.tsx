import * as React from 'react';
import styles from './ReactSessionWp.module.scss';
import { IReactSessionWpProps } from './IReactSessionWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClientResponse, HttpClient } from '@microsoft/sp-http';
import ISession from '../interfaces/ISession';
import SessionList from './list/SessionList';
import { autobind } from 'office-ui-fabric-react';
import Form from './form/form';

export interface IReactSessionWpState {
  sessionItems?: ISession[];
}

export default class ReactSessionWp extends React.Component<IReactSessionWpProps, IReactSessionWpState> {
  constructor(props: IReactSessionWpProps) {
    super(props);
    this.state = {
      sessionItems: null
    }
  }

  public componentDidMount(): void {
    this._RetrieveItems();
  }

  public render(): React.ReactElement<IReactSessionWpProps> {
    return (
      <div className={styles.reactSessionWp}>
        <div className="ms-Grid-row">
          <h1>Session list SPS Doha - demo</h1>
        </div>
        <div className="ms-Grid-row">
          <SessionList
            sessionItems={this.state.sessionItems}
            handleDelete={this._DeleteItem}
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
  private _DeleteItem(session: ISession) {
    this.setState(prevState => ({
      sessionItems: prevState.sessionItems.filter(el => el.title != session.title && el.speaker != session.title)
    }));
  }
}
