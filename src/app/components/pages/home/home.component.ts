import { GetAllProductsResponse } from './../../../models/interfaces/products/responses/GetAllProductsResponse';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  produtosRecebidos:GetAllProductsResponse[] = []

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
  this.getAPIIndexProduct();
  }

  getAPIIndexProduct():void{
    this.productsService.getAllProductsIndex()
    .pipe(takeUntil(this.destroy$))
    .subscribe(produtos => {
      this.produtosRecebidos = produtos
      console.log(this.produtosRecebidos);
    })
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete()
}

}
