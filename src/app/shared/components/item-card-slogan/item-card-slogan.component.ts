import {Component, inject, Input} from '@angular/core';
import {SloganModel} from "../../../core/models/slogan.model";
import {TextPipeService} from "../../pipe/text-pipe.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-item-card-slogan',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    TitleCasePipe
  ],
  templateUrl: './item-card-slogan.component.html',
  styleUrl: './item-card-slogan.component.scss'
})
export class ItemCardSloganComponent {

  textPipeService: TextPipeService = inject(TextPipeService);
  @Input() slogan!: SloganModel;

}
