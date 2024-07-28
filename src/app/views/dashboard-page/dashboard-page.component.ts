import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberService} from "../../shared/services/memberService/member.service";
import {Observable, of} from "rxjs";
import {MemberPageModel} from "../../core/models/member-page.model";
import {AsyncPipe, JsonPipe, LowerCasePipe, NgClass} from "@angular/common";
import {PageableComponent} from "../../shared/components/pageable/pageable.component";
import {MemberFormComponent} from "../member-form/member-form.component";
import {MemberModel} from "../../core/models/member.model";
import {ItemCardGraphComponent} from "../../shared/components/item-card-graph/item-card-graph.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ItemCardPersonComponent,
    AsyncPipe,
    PageableComponent,
    FormsModule,
    MemberFormComponent,
    ItemCardGraphComponent,
    JsonPipe,
    LowerCasePipe,
    NgClass
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
  memberService: MemberService = inject(MemberService)
  fb: FormBuilder = inject(FormBuilder)
  formGroupMember!: FormGroup
  search: string = ""
  titleForm: string = "Formulaire"
  member$: Observable<MemberPageModel> = this.memberService.getAllMembers(this.search,4, 0)


  ngOnInit() {
    this.formMember()
  }

  formMember(){
    this.formGroupMember = this.fb.group({
      id: [0],
      avatar: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      pseudo: ['', Validators.required],
      git: ['', Validators.required],
      dateIn: [new Date()]
    })
  }

  updateMember(member: MemberModel){
    console.log(member)
    this.formGroupMember = this.fb.group({
      id: [member.id],
      avatar: [member.avatar, Validators.required],
      lastName: [member.lastName, Validators.required],
      firstName: [member.firstName, Validators.required],
      pseudo: [member.pseudo, Validators.required],
      git: [member.git, Validators.required],
      dateIn: [new Date()]
    })
    this.titleForm = "Editer un membre"
  }

  /*
  onSubmit() {
    console.log(this.formGroupMember.value)
    if(this.formGroupMember.valid){
      this.memberService.postMember(this.formGroupMember.value)
      this.formGroupMember.reset()
    }else {

    }
  }
  */

  deleteMember(id: number){
    const confirmation = confirm('Confirmer la suppression d\' un membre ?')
    if(confirmation){
      this.memberService.deleteMember(id).subscribe()
      this.member$ = this.memberService.getAllMembers(this.search, 4,0)
    }
  }


  searchMember() {
    setTimeout(()=>{
      // this.memberService.filterMember(this.search)
      this.member$ = this.memberService.getAllMembers(this.search, 4,0)
    }, 200)
  }

  searchReset() {
    this.search = ""
    this.searchMember()
  }

  reset() {
    this.formGroupMember.reset()
    this.titleForm = "Nouveau membre"
  }

  refreshData(dataMember: MemberPageModel){
    this.member$ = of(dataMember)
  }

}
