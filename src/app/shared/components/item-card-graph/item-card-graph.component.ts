import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-card-graph',
  standalone: true,
  imports: [],
  templateUrl: './item-card-graph.component.html',
  styleUrl: './item-card-graph.component.scss'
})
export class ItemCardGraphComponent {
  @Input() title: string = "Graph"

}
