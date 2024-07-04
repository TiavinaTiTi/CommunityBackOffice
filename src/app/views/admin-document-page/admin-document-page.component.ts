import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
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
import {TIMEOUT} from "node:dns";

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
    DocsContentComponent,
    ReactiveFormsModule
  ],
  templateUrl: './admin-document-page.component.html',
  styleUrl: './admin-document-page.component.scss'
})
export class AdminDocumentPageComponent implements OnInit{
  search: string = ""
  documentService: DocumentService = inject(DocumentService)
  fb: FormBuilder = inject(FormBuilder)
  documents$: Observable<DocumentModel[]> = this.documentService.getAllDocuments()
  formGroupDocs!: FormGroup

  ngOnInit() {
    this.formDocument()
  }

  formDocument(){
    this.formGroupDocs = this.fb.group({
      id: 0,
      theme: ['', Validators.required],
      intervening: ['', Validators.required],
      post: ['', Validators.required],
      location: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: [null, Validators.required],
      git: ['', Validators.required],
      document: ['', Validators.required]
    })
  }

  searchDocument() {
    setTimeout(()=>{
      this.documents$ = this.documentService.filterDocument(this.search)
    }, 200)
  }

  searchReset() {
    this.search = ""
    this.searchDocument()
  }

  reset() {

  }

  onSubmit() {
    console.log(this.formGroupDocs.value)
    if(this.formGroupDocs.valid){
      this.documentService.postDocument(this.formGroupDocs.value)
      this.formGroupDocs.reset()
    }
  }
}
