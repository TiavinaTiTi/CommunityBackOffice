import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NgIf,
    FooterComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent{



}
