import {Component, Input} from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe} from "@angular/common";
import {DocumentModel} from "../../core/models/document.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-docs-content',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './docs-content.component.html',
  styleUrl: './docs-content.component.scss'
})
export class DocsContentComponent {

  @Input() documents!: DocumentModel[]
  idDocs!: number
  showDocs(id: number) {
    this.idDocs = id
  }
}
