import { HttpClient } from "@microsoft/sp-http";

export interface ITodoReactWpProps {
  description: string;
  httpClient:HttpClient;
}
