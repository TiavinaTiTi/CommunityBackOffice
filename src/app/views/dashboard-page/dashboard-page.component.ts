import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberService} from "../../shared/services/memberService/member.service";
import {Observable} from "rxjs";
import {MemberPageModel} from "../../core/models/member-page.model";
import {AsyncPipe} from "@angular/common";
import {PageableComponent} from "../../shared/components/pageable/pageable.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ItemCardPersonComponent,
    AsyncPipe,
    PageableComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
  memberService: MemberService = inject(MemberService)
  fb: FormBuilder = inject(FormBuilder)
  formGroupMember!: FormGroup
  member$:Observable<MemberPageModel> = this.memberService.getAllMembers()

  ngOnInit() {
    this.formMember()
  }

  formMember(){
    this.formGroupMember = this.fb.group({
      id: [0],
      avatar: [1],
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      pseudo: ['', Validators.required],
      git: ['', Validators.required],
      dateIn: [new Date()]
    })
  }

  onSubmit() {
    console.log(this.formGroupMember.value)
    if(this.formGroupMember.valid){
      this.memberService.postMember(this.formGroupMember.value)
      this.formGroupMember.reset()
    }else {

    }
  }

  deleteMember(id: number){
    const confirmation = confirm('Confirmer la suppression d\' un membre ?')
    if(confirmation){
      this.memberService.deleteMember(id)
    }
  }
}
