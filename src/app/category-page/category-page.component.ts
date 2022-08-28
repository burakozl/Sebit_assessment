import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { Post } from '../models/post';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  searchText:string = '';

  posts!:Post[];
  postId!:string | null;

  category:Category = {
    id: 0,
    name: '',
    description: '',
    icon: ''
  };

  length!:number;

  constructor(
    private postService:PostService,
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    private _snackBar:MatSnackBar,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getposts().subscribe({
      next: (res) => {
        this.posts = res.filter((post: { category_id: string | null; }) => this.postId == post.category_id);
        this.length = this.posts.length;
      },
      error: () => {
        this._snackBar.open("Error while getting the categories","Ok");
      }
    });

    this.categoryService.getCategory(this.postId).subscribe((res) => {
      this.category = res;
    });

  }

  get sortByDate() {
    if(this.posts != undefined){
      return this.posts.sort((a: any, b: any) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }else{
    return this.posts;
  }
  }

  showMore(postId:number){
    this.router.navigateByUrl('/post-detail/'+postId);
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
