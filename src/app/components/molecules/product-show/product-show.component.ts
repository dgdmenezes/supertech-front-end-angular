import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetProductData } from 'src/app/models/interfaces/products/responses/GetProductData';


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})

export class ProductShowComponent implements OnChanges {
//OnChanges detecta quando o valor muda
  @Input() productData:GetProductData = {} as GetProductData

  showProductData = this.productData as GetProductData


  ngOnChanges(changes: SimpleChanges): void {
   if(changes['productData']){
    this.showProductData = changes['productData'].currentValue;
   }
  }


}
