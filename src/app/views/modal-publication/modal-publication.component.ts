import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {PublicationModel} from "../../core/models/publication.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-modal-publication',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './modal-publication.component.html',
  styleUrl: './modal-publication.component.scss'
})
export class ModalPublicationComponent implements OnChanges{


  @Input() public publication!: PublicationModel;

  @Output() closeModal = new EventEmitter<boolean>()

  itemPublication!: PublicationModel;

  ngOnChanges() {
    this.itemPublication = this.publication
  }

  ModalInvisible() {
    this.closeModal.emit(false)
  }
}
