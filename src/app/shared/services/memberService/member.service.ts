import {inject, Injectable} from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";
import {Observable, of} from "rxjs";
import {MemberPageModel} from "../../../core/models/member-page.model";
import {environment} from "../../../../environments/environment.development";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
/*
  dataInit: MemberModel[] = [
    {id: 1, pseudo: 'tiavina', name: 'randrianoelison', firstName: 'tiavina mandimbisoa', git: 'http://localhost:4200/dashboard'},
    {id: 2, pseudo: 'dom', name: 'dominique', firstName: 'marcel augustin', git: ''},
    {id: 3, pseudo: 'jass', name: 'rantoniaina', firstName: 'jaspiere', git: ''},
    {id: 4, pseudo: 'tiff', name: 'rakotomavo', firstName: 'tiffany', git: ''},
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
  }*/

  private readonly url: string = `${environment.urlAPI}`
  private http:HttpClient = inject(HttpClient)

  /*getAllMembers(): Observable<MemberPageModel>{
    this.dataInitPage.content = this.dataInit
    this.members = this.dataInitPage;
    // console.log('getAllMembers')
    return of(this.members)
  }*/

  getAllMembers(search: string, size: number, page: number): Observable<MemberPageModel>{
    let params = new HttpParams()
      .append('search', search.toLowerCase())
      .append('size', size)
      .append('page', page)
    return this.http.get<MemberPageModel>(`${this.url}/member`, {params})
  }

  /*getFindByIdMember(id: number): Observable<MemberModel>{
    const member = this.dataInitPage.content.filter(value => (value.id === id))
    return of(member[0])
  }*/
  getFindByIdMember(id: number): Observable<MemberModel>{
    return this.http.get<MemberModel>(`${this.url}/member/id=${id}`)
  }

  postMember(member: MemberModel):Observable<MemberModel>{
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    return this.http.post<MemberModel>(`${this.url}/member`, member, options)
  }

  /*filterMember(inputSearch: string) {
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
  }*/

  /*postMember(member: MemberModel){
    this.dataInitPage.content.push(
      {
        id: this.dataInitPage.content.length + 1,
        name: member.name,
        firstName: member.firstName,
        pseudo: member.pseudo,
        git: member.git
      }
    )
    // console.log(this.dataInitPage)
  }*/

  /*updateMember(member: MemberModel){
    this.dataInitPage.content = this.dataInitPage.content.filter(value => value.id != member.id)
    this.dataInitPage.content.push(
      {
        id: member.id,
        name: member.name,
        firstName: member.firstName,
        pseudo: member.pseudo,
        git: member.git
      }
    )
  }*/

  updateMember(member: MemberModel, id: number):Observable<MemberModel>{
    let params = new HttpParams().append('id', id)
    return this.http.put<MemberModel>(`${this.url}/member`, member, {params})
  }

  deleteMember(id: number){
    console.log(id)
    let params = new HttpParams().append('id', id)
    return this.http.delete(`${this.url}/delete`, {params})

  }

}
