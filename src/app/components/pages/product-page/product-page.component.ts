import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductData } from 'src/app/models/interfaces/products/responses/GetProductData';
import { ProductsService } from 'src/app/services/products/products.service';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/responses/GetAllProductsResponse';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  dadosDoProduto:GetProductData = {} as GetProductData
  produtosSugeridosRecebidos:GetAllProductsResponse[] = []
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
    this.GetSuggestedProductsData()
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
    })}

    GetSuggestedProductsData():void{
      this.productsService.getSuggestedeProductData()
      .subscribe({
        next:(response)=>{
          this.produtosSugeridosRecebidos = response
          console.log(this.produtosSugeridosRecebidos);
        },
        error:(err)=>{
           console.log(err);
        }

      })
    }



}

