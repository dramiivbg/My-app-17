import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(private firebaseAuthService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) { }

  loginWithEmailAndPassword(email:string, password:string){
    return this.firebaseAuthService.signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        this.userData = userCredential;
        this.observeUserState();
      }).catch(error => alert(error.message));
  }

  signUpWithEmailAndPassword(email:string, password:string){
    return this.firebaseAuthService.createUserWithEmailAndPassword(email,password)
      .then((userCredential) => {
        this.userData = userCredential;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.observeUserState();
      });
  }

  observeUserState(){
    this.firebaseAuthService.authState.subscribe((userState) => {
      userState && this.ngZone.run(() => this.router.navigate(['home']))
    })
  }

  loginWithGoogleProvider(){
    return this.firebaseAuthService.signInWithPopup(new GoogleAuthProvider())
      .then(() => this.observeUserState())
  }

  get isLoggeIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  logout(){
    return this.firebaseAuthService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
