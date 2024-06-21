import { Injectable } from '@angular/core';
import {DocumentModel} from "../../../core/models/document.model";
import {Observable, of} from "rxjs";
import {MemberModel} from "../../../core/models/member.model";
import {MemberPageModel} from "../../../core/models/member-page.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  dataInit: DocumentModel[] = [
    {id: 1, theme: 'Fondamentale Git', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
    {id: 2, theme: 'Fondamentale Angular', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
    {id: 3, theme: 'Fondamentale Spring Boot', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
  ]

  getAllDocuments(): Observable<DocumentModel[]>{
    return of(this.dataInit)
  }

  filterDocument(inputSearch: string) {
    let docs : DocumentModel[] = [];
    let data$:Observable<DocumentModel[]> = this.getAllDocuments();
    data$.subscribe({
      next: value => {
        docs = value.filter((value)=>value.theme.toLowerCase().includes(inputSearch.toLowerCase()) || value.intervening.toLowerCase().includes(inputSearch.toLowerCase()))
      }
    })
    return of(docs);
  }

}
