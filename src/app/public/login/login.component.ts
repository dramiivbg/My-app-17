import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,
    MatIconModule,MatCardModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private formBuilder =  inject(FormBuilder);

  profileForm = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  login(){
    this.authService.loginWithEmailAndPassword(this.profileForm.controls.email.value,this.profileForm.controls.password.value);
  }

  loginWithGoogle(){
    this.authService.loginWithGoogleProvider();
  }
}
