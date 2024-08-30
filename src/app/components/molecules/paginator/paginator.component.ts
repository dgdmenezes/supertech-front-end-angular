import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() totalRecordsReceived:number = 0


  totalRecords = 30
  first: number = 0;

  rows: number = 10;

//   onPageChange(event: { first: number; rows: number; }) {
//       this.first = event.first;
//       this.rows = event.rows;
// }
}
