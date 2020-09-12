import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../../models/basket';
import { faMinusSquare, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  faMinusSquare = faMinusSquare;
  faPlusSquare = faPlusSquare;
  faTrash = faTrashAlt;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem): void {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem): void {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem): void {
    this.remove.emit(item);
  }

}
