import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ItemPublicationComponent} from "../item-publication/item-publication.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberModel} from "../../core/models/member.model";
import {MemberService} from "../../shared/services/memberService/member.service";
import {count, Observable, of} from "rxjs";
import {MemberPageModel} from "../../core/models/member-page.model";
import {PageableComponent} from "../../shared/components/pageable/pageable.component";
import {SloganModel} from "../../core/models/slogan.model";
import {SloganService} from "../../shared/services/sloganService/slogan.service";
import {ItemCardSloganComponent} from "../../shared/components/item-card-slogan/item-card-slogan.component";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    AsyncPipe,
    ItemPublicationComponent,
    ReactiveFormsModule,
    FormsModule,
    ItemCardPersonComponent,
    JsonPipe,
    PageableComponent,
    TitleCasePipe,
    UpperCasePipe,
    ItemCardSloganComponent
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent implements OnInit{
  search: string = ''
  private memberService: MemberService = inject(MemberService)
  private sloganService: SloganService = inject(SloganService)
  // members$: Observable<MemberPageModel> = this.memberService.getAllMembers()
  members$!: Observable<MemberPageModel>
  pages: number[] = [1,2,3]
  slogan$!: Observable<SloganModel[]>

  contentTemplate: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]

  ngOnInit() {
    this.chargeDataMembers()
    this.chargeDataSlogans()
  }

  searchTraining() {
    console.log('searchTraining')
    setTimeout(()=>{
      let data$:Observable<MemberPageModel> = this.memberService.filterMember(this.search)
      this.members$ = data$
    }, 200)
  }

  log(){
    console.log('log')
  }

  chargeDataMembers(){
    setTimeout(()=>{
      this.members$ =  this.memberService.getAllMembers()
    }, 5000)
  }

  chargeDataSlogans(){
    setTimeout(()=>{
      this.slogan$ = this.sloganService.getAllSlogan()
    }, 5000)
  }

}
