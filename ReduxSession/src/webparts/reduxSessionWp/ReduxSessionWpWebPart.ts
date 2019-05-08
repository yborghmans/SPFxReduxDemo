import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReduxSessionWpWebPartStrings';
import ReduxSessionWp from './components/ReduxSessionWp';
import { IReduxSessionWpProps } from './components/IReduxSessionWpProps';
import configureStore from './store/configureStore';

export interface IReduxSessionWpWebPartProps {
  description: string;
}

export default class ReduxSessionWpWebPart extends BaseClientSideWebPart<IReduxSessionWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReduxSessionWpProps > = React.createElement(
      ReduxSessionWp,
      {
        description: this.properties.description,
        httpClient:this.context.httpClient
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
