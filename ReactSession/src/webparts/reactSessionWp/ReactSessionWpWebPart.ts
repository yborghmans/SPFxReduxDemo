import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactSessionWpWebPartStrings';
import ReactSessionWp from './components/ReactSessionWp';
import { IReactSessionWpProps } from './components/IReactSessionWpProps';

export interface IReactSessionWpWebPartProps {
  description: string;
}

export default class ReactSessionWpWebPart extends BaseClientSideWebPart<IReactSessionWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactSessionWpProps > = React.createElement(
      ReactSessionWp,
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
