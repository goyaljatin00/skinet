import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSignOutAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;

  faShoppingCart = faShoppingCart;
  faLogOut = faSignOutAlt;
  faOrders = faHistory;

  constructor(private basketService: BasketService, private accountService: AccountService)
  {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.CurrentUser$;
  }

  // tslint:disable-next-line: typedef
  logOut() {
    this.accountService.logOut();
  }

}
