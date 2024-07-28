import { Injectable } from '@angular/core';
import {SloganModel} from "../../../core/models/slogan.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  dataSet: SloganModel[] = [
    /*{id: 1, member: {id: 1, avatar:1, pseudo: 'tiavina', lastName: 'randrianoelison', firstName: 'tiavina mandimbisoa', git: ''}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Deleniti, quaerat totam!'},
    {id: 2, member: {id: 2, avatar:1, pseudo: 'dom', lastName: 'dominique', firstName: 'marcel augustin', git: ''}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Deleniti, quaerat totam!'},
    {id: 3, member: {id: 4, avatar:1, pseudo: 'tiff', lastName: 'rakotomavo', firstName: 'tiffany', git: ''}, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias reiciendis rem? Deleniti, quaerat totam! Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,'},
  */]

  getAllSlogan(): Observable<SloganModel[]>{
    return of(this.dataSet)
  }

}
