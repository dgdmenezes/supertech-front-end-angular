import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/responses/GetAllProductsResponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject()

  constructor(
    private productsService:ProductsService,
    private route:ActivatedRoute){}

  categoryName!:string
  produtosRecebidos:GetAllProductsResponse[] = []
  paginatorAllProducts:number = 0

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.categoryName = params.get('categoryName') as string
      console.log(this.categoryName);
      this.getCategoryData(this.categoryName, 0, 12)
      this.getAmountProductsByCategory(this.categoryName)
      })


  }

  getCategoryData(categoryName:string, skip:number, limit:number):void{
    this.productsService.getCategoryDataAPI(categoryName, skip, limit)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(response)=>{
        this.produtosRecebidos = response;
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }

  getAmountProductsByCategory(categoryName:string):void{
    this.productsService.getAmountProductsByCategoryAPI(categoryName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(response)=>{
        console.log(response[0].counter);
      },
      error: (err) =>{
        console.log(err);

      }

    })
    }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
