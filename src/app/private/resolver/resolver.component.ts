import { Component, DestroyRef, ElementRef, OnInit, Renderer2, ViewChild, computed, input, viewChild } from '@angular/core';
import { Product } from '../../shared/models/product';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-resolver',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,
    MatIconModule,MatCardModule],
  templateUrl: './resolver.component.html',
  styleUrl: './resolver.component.scss'
})
export class ResolverComponent implements OnInit{
  public data = [0,2,1,3,4,5,6,7];
  position:boolean = false;
  profileForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });
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
  rating = computed(() => {
    const { rating } = this.product;
    return Object(rating)
  });
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    console.log(this.rating());
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias(){
    this.aliases.push(this.formBuilder.control(''));
  }
  removeAlias(i:number){
    this.aliases.removeAt(i);
  }
  async onSubmit(){
    console.log(this.profileForm);
  }
}
