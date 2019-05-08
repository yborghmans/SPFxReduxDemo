import * as React from 'react';
import { IReduxSessionWpProps } from './IReduxSessionWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './ReduxSessionWp.module.scss';

import SessionList from './list/SessionList';
import Form from './form/Form';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { GetItems } from '../actions/AsyncFunction';


export default class ReduxSessionWp extends React.Component<IReduxSessionWpProps, {}> {

  private store: any = configureStore();
  constructor(props) {
    super(props);
    this.store.dispatch(GetItems(this.props.httpClient));
  }
  public render(): React.ReactElement<IReduxSessionWpProps> {
    return (
      <Provider store={this.store}>
        <div className={styles.reduxSessionWp}>
          <div className="ms-Grid-row">
            <h1>Session list SPS Doha - demo</h1>
          </div>
          <div className="ms-Grid-row">
            <SessionList />
          </div>
          <div className="ms-Grid-row">
            <Form />
          </div>
        </div>
      </Provider>
    );
  }
}
