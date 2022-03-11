import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public book : any =[];
  public grandTotal : number = 0;

  constructor(private WishlistService : WishlistService) { }

  ngOnInit(): void {
    this.WishlistService.getProducts()
    .subscribe(res=>{
      this.book = res; 
  })
}
}


