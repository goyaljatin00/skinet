import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  faMinusSquare = faMinusSquare;
  faPlusSquare = faPlusSquare;
  product: IProduct;
  quantity = 1;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, 
              private bcService: BreadcrumbService, private basketService: BasketService)
  {
    this.bcService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  // tslint:disable-next-line: typedef
  addItemsToBasket()
  {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  // tslint:disable-next-line: typedef
  incrementQuantity() {
    this.quantity++;
  }

  // tslint:disable-next-line: typedef
  decrementQuantity() {
    if (this.quantity > 1) {this.quantity--; }
  }

  // tslint:disable-next-line: typedef
  loadProduct()
  {
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
  }

}
