import {Component, Input} from '@angular/core';
import {DatePipe, JsonPipe, NgClass} from "@angular/common";
import {DocumentModel} from "../../../core/models/document.model";
import {count, Observable} from "rxjs";

@Component({
  selector: 'app-item-card-docs',
  standalone: true,
  imports: [
    DatePipe,
    JsonPipe,
    NgClass
  ],
  templateUrl: './item-card-docs.component.html',
  styleUrl: './item-card-docs.component.scss'
})
export class ItemCardDocsComponent {

  @Input() item!: DocumentModel
  idDocs!: number
  showDocs(id: number) {
    this.idDocs = id
  }

}
