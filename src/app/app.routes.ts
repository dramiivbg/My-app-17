import { Routes } from '@angular/router';
import { ResolverComponent } from './resolver/resolver.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListApodComponent } from './list-apod/list-apod.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'resolver', component: ResolverComponent},
    {path: 'apod', component: ListApodComponent},
    {path: 'list', component: ListComponent}
];
