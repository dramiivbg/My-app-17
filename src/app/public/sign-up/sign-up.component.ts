import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  providers:[AuthService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthService);
}
