import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemDocumentComponent} from "../item-document/item-document.component";
import {DocumentService} from "../../shared/services/documentService/document.service";
import {Observable} from "rxjs";
import {DocumentModel} from "../../core/models/document.model";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ItemDocumentComponent,
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent implements OnInit{
  search: string = '';

  documentService: DocumentService = inject(DocumentService)

  documents!: Observable<DocumentModel[]>;
  loaderDocs: number[] = [1,2,3,4,5,6]

  ngOnInit() {
    this.chargeData()
  }

  searchTraining() {
    setTimeout(()=>{
      this.documents = this.documentService.filterDocument(this.search)
    }, 200)
  }

  chargeData(){
    setTimeout(()=>{
      this.documents = this.documentService.getAllDocuments()
    }, 2500)
  }

}
