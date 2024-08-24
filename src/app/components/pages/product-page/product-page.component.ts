import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductData } from 'src/app/models/interfaces/products/responses/GetProductData';
import { ProductsService } from 'src/app/services/products/products.service';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/responses/GetAllProductsResponse';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

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
    .pipe(takeUntil(this.destroy$))
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
      .pipe(takeUntil(this.destroy$))
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

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
}

