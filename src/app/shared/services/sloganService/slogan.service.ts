import { Injectable } from '@angular/core';
import {SloganModel} from "../../../core/models/slogan.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  dataSet: SloganModel[] = [
    {id: 1, member: {id: 1, pseudo: 'tiavina', name: 'randrianoelison', firstName: 'tiavina mandimbisoa'}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Deleniti, quaerat totam!'},
    {id: 2, member: {id: 2, pseudo: 'dom', name: 'dominique', firstName: 'marcel augustin'}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Deleniti, quaerat totam!'},
    {id: 3, member: {id: 4, pseudo: 'tiff', name: 'rakotomavo', firstName: 'tiffany'}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Deleniti, quaerat totam! Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,'},
  ]

  getAllSlogan(): Observable<SloganModel[]>{
    return of(this.dataSet)
  }

}
