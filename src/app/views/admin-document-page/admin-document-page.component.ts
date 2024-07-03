import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberFormComponent} from "../member-form/member-form.component";
import {PageableComponent} from "../../shared/components/pageable/pageable.component";
import {ItemDocumentComponent} from "../item-document/item-document.component";
import {DocumentService} from "../../shared/services/documentService/document.service";
import {Observable} from "rxjs";
import {DocumentModel} from "../../core/models/document.model";
import {ItemCardGraphComponent} from "../../shared/components/item-card-graph/item-card-graph.component";
import {ItemCardDocsComponent} from "../../shared/components/item-card-docs/item-card-docs.component";
import {DocsContentComponent} from "../docs-content/docs-content.component";

@Component({
  selector: 'app-admin-document-page',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ItemCardPersonComponent,
    MemberFormComponent,
    PageableComponent,
    ItemDocumentComponent,
    DatePipe,
    ItemCardGraphComponent,
    ItemCardDocsComponent,
    DocsContentComponent
  ],
  templateUrl: './admin-document-page.component.html',
  styleUrl: './admin-document-page.component.scss'
})
export class AdminDocumentPageComponent implements OnInit{
  search: string = ""
  documentService: DocumentService = inject(DocumentService)
  documents$!: Observable<DocumentModel[]>;
  loaderDocs: number[] = [1,2,3,4,5,6]
  idDocs!: number

  ngOnInit() {
    this.chargeData()
  }

  chargeData(){
    this.documents$ = this.documentService.getAllDocuments()
  }

  searchDocument() {

  }

  searchReset() {

  }

  reset() {

  }


  showDocs(id: number) {
    this.idDocs = id
  }
}
