import {Component, inject, Input, OnInit} from '@angular/core';
import {PageableModel} from "../../../core/models/pageable.model";
import {MemberService} from "../../services/memberService/member.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pageable',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './pageable.component.html',
  styleUrl: './pageable.component.scss'
})
export class PageableComponent implements OnInit{

  memberService = inject(MemberService)

  @Input() pageable: PageableModel = this.memberService.dataInitPage.pageable
  pages: number[] = []

  ngOnInit() {
    this.iterationArray()
  }

  iterationArray(){
    for(let i = 0; i < this.pageable.totalPages; i++){
      this.pages.push(i)
    }
  }

  goToPage() {

  }
}
