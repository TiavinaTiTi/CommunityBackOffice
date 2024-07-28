import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MemberService} from "../../shared/services/memberService/member.service";
import {switchMap} from "rxjs";
import {MemberPageModel} from "../../core/models/member-page.model";
import {avatar} from "../../shared/data/data";
import {JsonPipe} from "@angular/common";


@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss'
})
export class MemberFormComponent{
  memberService: MemberService = inject(MemberService)
  @Input() formGroupMember!: FormGroup
  @Input() title: string = "Formulaire"
  @Input() search: string = ""
  @Output()
  public member: EventEmitter<MemberPageModel> = new EventEmitter<MemberPageModel>();

  avatar = avatar

  onSubmit() {
    if(this.formGroupMember.valid){
      let member = this.formGroupMember.value
      if(member.id === null || member.id === 0){
        member.dateIn = new Date()
        member.pseudo = member.pseudo.toLowerCase()
        /*this.memberService.postMember(this.formGroupMember.value).subscribe()*/

        this.memberService.postMember(this.formGroupMember.value).pipe(
          switchMap(value => this.memberService.getAllMembers(this.search,4,0))
        ).subscribe(value => this.member.emit(value))
      }else {
        member.dateIn = new Date()
        // this.memberService.updateMember(this.formGroupMember.value, member.id).subscribe()
        this.memberService.updateMember(this.formGroupMember.value, member.id).pipe(
          switchMap(value => this.memberService.getAllMembers(this.search,4,0))
        ).subscribe(value => this.member.emit(value))
      }
      this.formGroupMember.reset()
    }else {
      console.log("NO: "+this.formGroupMember.value)
    }
  }

}
