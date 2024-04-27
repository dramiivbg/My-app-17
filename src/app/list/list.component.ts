import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../shared/service/Api.service';
import { environment } from '../../environments/environment';
import { formatDate } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Catalog } from '../shared/models/catalog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule,MatTableModule, MatPaginatorModule,
    MatCardModule,MatProgressSpinnerModule
  ],
  providers: [ApiService,provideNativeDateAdapter()],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements AfterViewInit{
  public catalogs:Catalog[] = [];
  public loading:boolean = false;
  public displayedColumns: string[] = ['position','catalog', 'activityID', 'location', 'link'];
  public dataSource = new MatTableDataSource<Catalog>(this.catalogs);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private formBuilder = inject(FormBuilder);
  private catalogService = inject(ApiService)
  profileForm = this.formBuilder.group({
    start_date: ['', Validators.required],
    end_date: ['',Validators.required],
  });
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getNeows(){
    this.loading = true;
    let start_date = formatDate(String(this.profileForm.controls.start_date.value),'yyyy-MM-dd', 'en_US');
    let end_date = formatDate(String(this.profileForm.controls.end_date.value),'yyyy-MM-dd', 'en_US');
    this.catalogService.getData<Catalog[]>(environment.catalog+`startDate=${start_date}&endDate=${end_date}&api_key=DEMO_KEY`).subscribe((catalog:Catalog[]) => {
      this.catalogs = catalog;
      this.catalogs.map((catalog,index) => catalog.position = index);
      this.dataSource.data = this.catalogs;
      this.loading = false;
      console.log(this.catalogs);
    });
  }
}
