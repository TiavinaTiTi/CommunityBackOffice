import {Component, inject, Input} from '@angular/core';
import {DocumentModel} from "../../core/models/document.model";
import {DocumentService} from "../../shared/services/documentService/document.service";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {TextPipeService} from "../../shared/pipe/text-pipe.service";

@Component({
  selector: 'app-item-document',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './item-document.component.html',
  styleUrl: './item-document.component.scss'
})
export class ItemDocumentComponent {

  textPipeService: TextPipeService = inject(TextPipeService)
  @Input() document!: DocumentModel;

}
