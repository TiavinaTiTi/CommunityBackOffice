import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {PublicationModel} from "../../core/models/publication.model";
import {ModalPublicationComponent} from "../modal-publication/modal-publication.component";

@Component({
  selector: 'app-item-publication',
  standalone: true,
  imports: [
    DatePipe,
    ModalPublicationComponent
  ],
  templateUrl: './item-publication.component.html',
  styleUrl: './item-publication.component.scss'
})
export class ItemPublicationComponent {

  @Input() itemPublication!: PublicationModel;
  modal: boolean = false

  pipeText(text: string, limite: number){
    const count = text.length
    text = text.slice(0, limite)
    if(count > limite){
      text += '...'
    }
    return text
  }

  showModal(value: boolean) {
    this.modal = value
  }
}
