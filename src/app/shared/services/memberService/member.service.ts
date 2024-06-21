import { Injectable } from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";
import {Observable, of} from "rxjs";
import {MemberPageModel} from "../../../core/models/member-page.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  dataInit: MemberModel[] = [
    {id: 1, pseudo: 'tiavina', name: 'randrianoelison', firstName: 'tiavina mandimbisoa'},
    {id: 2, pseudo: 'dom', name: 'dominique', firstName: 'marcel augustin'},
    {id: 3, pseudo: 'jass', name: 'rantoniaina', firstName: 'jaspiere'},
    {id: 4, pseudo: 'tiff', name: 'rakotomavo', firstName: 'tiffany'},
  ]

  dataInitPage: MemberPageModel = {
    content: this.dataInit,
    pageable: {
      pageNumber: 0,
      pageSize: 2,
      totalPages: 3,
      totalElements: this.dataInit.length
    }
  }

  members: MemberPageModel = {
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      totalElements: 0
    }
  }

  getAllMembers(): Observable<MemberPageModel>{
    this.dataInitPage.content = this.dataInit
    this.members = this.dataInitPage;
    console.log('getAllMembers')
    return of(this.members)
  }


  filterMember(inputSearch: string) {
    let member : MemberModel[] = [];
    let structMember: MemberPageModel = this.members;
    let data$ = this.getAllMembers();
    data$.subscribe({
      next: value => {
        member = value.content.filter((value)=> value.name.toLowerCase().includes(inputSearch.toLowerCase()) || value.firstName.toLowerCase().includes(inputSearch.toLowerCase()) || value.pseudo.toLowerCase().includes(inputSearch.toLowerCase()))
      }
    })
    structMember.content = member
    console.log('filterMember')
    return of(structMember);
  }

}
