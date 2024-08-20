import { GetAllProductsResponse } from './../../../models/interfaces/products/responses/GetAllProductsResponse';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  produtosRecebidos:GetAllProductsResponse[] = []

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
  this.getAPIIndexProduct();
  }

  getAPIIndexProduct():void{
    this.productsService.getAllProductsIndex()
    .subscribe(produtos => {
      this.produtosRecebidos = produtos
      console.log(this.produtosRecebidos);
    })
}



}
