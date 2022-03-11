import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public bookList : any ;
  searchKey:string = "";
  constructor(private api : ApiService, private cartService : CartService,private WishListservice : WishlistService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.bookList = res;
    })

    this.cartService.search.subscribe(value=>{
      this.searchKey = value;
    })
  }
  addtoCart(item : any){
    this.cartService.addtoCart(item);
    }

  addtoWishList(item : any){
    this.WishListservice.addtoWishList(item);
    

  }



}
