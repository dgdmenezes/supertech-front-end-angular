import { Component, OnInit } from '@angular/core';
import { GetProductData } from 'src/app/models/interfaces/products/responses/GetProductData';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  dadosDoProduto:GetProductData = {} as GetProductData


  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
    this.GetOneProductData()
  }

  GetOneProductData():void{
    this.productsService.getProductOneProductData()
    .subscribe({
      next:(response)=>{
        this.dadosDoProduto = response;
        console.log(this.dadosDoProduto);
        },
      error:(err)=>{
        console.log(err);

      }
    })

  }




}

