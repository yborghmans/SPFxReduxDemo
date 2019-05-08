import { AddNewSession } from './index';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export function GetItems(httpClient: HttpClient) {

    return async (dispatch: any) => {
        httpClient.get("https://spsdohaapi.azurewebsites.net/api/values", HttpClient.configurations.v1)
            .then((data: HttpClientResponse) => data.json())
            .then((data: any) => {
                data.forEach(element => {
                    var session = {
                        title: element.title,
                        speaker: element.speaker
                    };
                    return dispatch(AddNewSession(session));
                });
            });
    };
}