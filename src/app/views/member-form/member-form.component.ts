import {Component, inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../shared/services/memberService/member.service";

@Component({
  selector: 'app-member-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss'
})
export class MemberFormComponent{
  memberService: MemberService = inject(MemberService)
  @Input() formGroupMember!: FormGroup
  @Input() title: string = "Formulaire"


  onSubmit() {
    console.log(this.formGroupMember.value)
    if(this.formGroupMember.valid){
      const member = this.formGroupMember.value
      if(member.id === null || member.id === 0){
        this.memberService.postMember(this.formGroupMember.value)
      }else {
        this.memberService.updateMember(this.formGroupMember.value)
      }
      this.formGroupMember.reset()
    }else {

    }
  }


}
