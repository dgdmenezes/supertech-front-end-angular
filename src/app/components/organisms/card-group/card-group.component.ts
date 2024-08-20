import { Component, Input, OnInit, Output} from '@angular/core';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/responses/GetAllProductsResponse';



@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})

export class CardGroupComponent implements OnInit {

@Input() ProductDataReceived:GetAllProductsResponse[] = []


CardsData:GetAllProductsResponse[] = this.ProductDataReceived

ngOnInit(): void {
  this.CardsData = this.ProductDataReceived
  console.log("card DATA" + this.CardsData);
}



}
