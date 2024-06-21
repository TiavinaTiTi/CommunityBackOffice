import {Time} from "@angular/common";

export interface DocumentModel {
  id: number,
  theme: string,
  intervening: string,
  post: string,
  date: Date,
  time: Time,
  location: string,
  document: string,
  git: string
}
