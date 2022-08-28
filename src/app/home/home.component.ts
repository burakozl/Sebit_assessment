import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories!: Category[];

  searchText:string = '';

  constructor(private categoryService:CategoryService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      {
        next: (res) => {
          this.categories = res;
        },
        error: () => {
          this._snackBar.open("Error while getting the categories","Ok");
        }
      }
    )
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }


}
