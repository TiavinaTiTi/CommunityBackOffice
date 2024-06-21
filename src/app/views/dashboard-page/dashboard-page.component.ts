import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
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
export class DashboardPageComponent {
  memberService: MemberService = inject(MemberService)
  person$:Observable<MemberPageModel> = this.memberService.getAllMembers()

}
