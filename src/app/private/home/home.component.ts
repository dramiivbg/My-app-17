import { Component, DestroyRef } from '@angular/core';
import { Product } from '../../shared/models/product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  product: Product = {
    id: 1,
    category: 'frut',
    description: 'guayaba',
    image: '',
    price: 500,
    rating: {
      count: 2,
      rate: 1
    },
    title: 'Guabaya'

  }

  constructor(private destroyRef: DestroyRef){
    this.destroyRef.onDestroy(() => {
      console.log('home destruction');
    });
  }
}
