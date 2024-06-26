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

  onSubmit() {
    console.log(this.formGroupMember.value)
    if(this.formGroupMember.valid){
      this.memberService.postMember(this.formGroupMember.value)
      this.formGroupMember.reset()
    }else {

    }
  }


}
