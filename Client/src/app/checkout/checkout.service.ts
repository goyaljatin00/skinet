import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IDeliveryMethod} from '../shared/models/deliveryMethod';
import {IOrdertoCreate} from '../shared/models/order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  createOrder(order: IOrdertoCreate) {
    return this.http.post(this.baseUrl + 'orders', order);
  }

  // tslint:disable-next-line: typedef
  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price );
      })
    );
  }

}
