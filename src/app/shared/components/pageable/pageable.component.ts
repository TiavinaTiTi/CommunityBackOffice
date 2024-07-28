import {Component, EventEmitter, inject, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PageableModel} from "../../../core/models/pageable.model";
import {MemberService} from "../../services/memberService/member.service";
import {NgClass} from "@angular/common";
import {MemberPageModel} from "../../../core/models/member-page.model";

@Component({
  selector: 'app-pageable',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './pageable.component.html',
  styleUrl: './pageable.component.scss'
})
export class PageableComponent implements OnChanges{

  memberService = inject(MemberService)

  @Input() totalPages: number = 0
  @Input() pageNumber: number = 0
  @Input() search: string = ""
  @Output() currentEvent = new EventEmitter<MemberPageModel>()
  pages: number[] = this.iterationArray()

  ngOnChanges() {
    this.pages = this.iterationArray()
  }

  iterationArray(){
    let data: number[] = []
    for(let i = 0; i < this.totalPages; i++){
      data.push(i)
    }
    return data
  }

  goToPage(current: number) {
    this.memberService.getAllMembers(this.search, 4, current).subscribe({
      next: value => this.currentEvent.emit(value)
    })
  }
}
