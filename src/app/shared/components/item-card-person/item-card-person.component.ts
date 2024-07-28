import {Component, Input} from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {avatar} from "../../data/data";

@Component({
  selector: 'app-item-card-person',
  standalone: true,
  imports: [
    TitleCasePipe,
    UpperCasePipe
  ],
  templateUrl: './item-card-person.component.html',
  styleUrl: './item-card-person.component.scss'
})
export class ItemCardPersonComponent {

  @Input() member!: MemberModel

  avatar = [
    {id: 1, label: 'avatar1', img: 'avatar.svg', value:'avatar1'},
    {id: 2, label: 'avatar2', img: 'avatar2.svg', value:'avatar2'},
    {id: 3, label: 'avatar3', img: 'avatar3.svg', value:'avatar3'},
  ]
  formatFullName(name: string){
    const space = " ";
    let fullName: string = ""
    let arrayName = name.split(space)
    for (let i = 0; i < arrayName.length; i++){
      if(i === 0){
        fullName += arrayName[i].toUpperCase() + space
      }else{
        fullName += arrayName[i].slice(0,1).toUpperCase()
        fullName += arrayName[i].slice(1).toLowerCase() + space
      }
    }
    return fullName
  }


}
