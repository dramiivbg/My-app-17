import { Routes } from '@angular/router';
import { ResolverComponent } from './private/resolver/resolver.component';
import { ListApodComponent } from './private/list-apod/list-apod.component';
import { ListComponent } from './private/list/list.component';
import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, /*canActivate:[authGuard]*/},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'resolver', component: ResolverComponent, canActivate: [authGuard]},
    {path: 'apod', component: ListApodComponent, canActivate: [authGuard]},
    {path: 'list', component: ListComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent}
];
