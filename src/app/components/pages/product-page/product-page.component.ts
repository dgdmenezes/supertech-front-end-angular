import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductData } from 'src/app/models/interfaces/products/responses/GetProductData';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  dadosDoProduto:GetProductData = {} as GetProductData
  productId:string | null = null

  constructor(
    private productsService:ProductsService,
    private route:ActivatedRoute

  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
    this.productId = params.get('id')
    })
    this.GetOneProductData(`${this.productId}`)
  }

  GetOneProductData(id:string):void{
    this.productsService.getProductOneProductData(id)
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

