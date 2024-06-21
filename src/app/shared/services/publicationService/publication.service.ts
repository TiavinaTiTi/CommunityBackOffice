import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PublicationModel} from "../../../core/models/publication.model";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  dataInit: PublicationModel[] = [
    {id: 1, title: 'Training', date: new Date(), description: 'Lorem ipsum dolor sit amet'},
    {id: 2, title: 'Seance Dos', date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae'},
    {id: 3, title: 'Biceps', date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae'},
    {id: 4, title: 'Cardio', date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae'},
    {id: 5, title: 'Diet', date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae'},
    {id: 6, title: 'PDM 8Kg', date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae consectetur adipisicing elit. Cum ducimus facere harum illo quam repudiandae'},
  ]

  publications: PublicationModel[] = []
  // Recupere tous les publications
  getAlltraining(): Observable<PublicationModel[]>{
    this.publications = this.dataInit;
    return of(this.publications)
  }
  // Filtre les donnees en fonction du titre
  filterTraining(inputSearch: string) {
    let publication : PublicationModel[] = [];
    const data$ = this.getAlltraining();
    data$.subscribe({
      next: value => {
        publication = value.filter((value)=> value.title.toLowerCase().includes(inputSearch))
      }
    })
    return publication;
  }
}
