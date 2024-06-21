import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Observable, of} from "rxjs";
import {PublicationModel} from "../../core/models/publication.model";
import {PublicationService} from "../../shared/services/publicationService/publication.service";
import {ItemPublicationComponent} from "../item-publication/item-publication.component";

@Component({
  selector: 'app-training-page',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    AsyncPipe,
    ItemPublicationComponent
  ],
  templateUrl: './training-page.component.html',
  styleUrl: './training-page.component.scss'
})
export class TrainingPageComponent implements OnInit{
  search: string = ''
  publications$!: Observable<PublicationModel[]>;
  // Injection de dependance
  private publicationService: PublicationService = inject(PublicationService)

  ngOnInit() {
    this.getAllTraining()
  }

  getAllTraining(){
    this.publications$ = this.publicationService.getAlltraining()
  }

  searchTraining() {
    setTimeout(()=>{
      let data = this.publicationService.filterTraining(this.search)
      this.publications$ = of(data)
    }, 200)
  }
}
