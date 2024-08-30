import { ProductsService } from './../../../services/products/products.service';
import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.css']
})
export class HeaderSearchBarComponent implements OnInit, OnDestroy{
   private searchSubject = new Subject<string>()
   private readonly debounceTimeMs = 300; //tempo de debouce em ms
   private readonly destroy$: Subject<void> = new Subject();

   constructor(private productService:ProductsService){}

   searchProductIcon = faMagnifyingGlass;

  ngOnInit(): void {
    this.searchSubject
    .pipe(debounceTime(this.debounceTimeMs))
    .subscribe(searchValue =>{
      this.performSearch(searchValue);
    });
  }
  inputText:string=""

  onSearch():void{
    this.searchSubject.next(this.inputText)
  }

  onClickOrKeyDownEnter():void{
    this.productService.getSearchProducts(this.inputText)
    .subscribe({
      next: (response)=>{
        console.log(response);

      },
      error: (err) =>{
        console.log(err);

      }
    })

  }


  performSearch(searchValue:string){
    this.productService.getSearchBarProducts(searchValue)
    .subscribe({
      next:(response)=>{
        console.log(response);

      },
      error:(err)=>{
        console.log(err);

      }
    })

    console.log(searchValue);

  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
