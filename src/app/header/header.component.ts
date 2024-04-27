import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatListModule} from '@angular/material/list'; 
interface FoodNode {
  name: string;
  url?:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'list',
    children: [
      {
        name: 'Apod',
        url: '/Apod'
      }],
  },
  {
    name: 'form',
    children: [
      {
        name: 'Resolver',
        url: '/Resolver'
      }
    ],
  },
  {
    name: 'table',
    children: [
      {
        name: 'catalogs',
        url: '/catalogs'
      }
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule,
    RouterOutlet, RouterLink, RouterLinkActive,MatSidenavModule,MatTreeModule,MatListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
