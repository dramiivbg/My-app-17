import { Component, NgModule, SecurityContext } from '@angular/core';
import { Apod } from '../shared/models/apod';
import { ApiService } from '../shared/service/Api.service';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-apod',
  standalone: true,
  imports: [],
  providers: [ApiService,provideNativeDateAdapter()],
  templateUrl: './list-apod.component.html',
  styleUrl: './list-apod.component.scss'
})
export class ListApodComponent {
  public Apod: Apod = {
    explanation: '',
    date: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  };
  constructor(private apodService: ApiService, private formBuilder: FormBuilder){
    this.getApod();
  }

  getApod(){
    this.apodService.getData<Apod>(environment.apod).subscribe((apod:Apod) => {
       this.Apod = apod;
       console.log(apod);
    });
  }
}
