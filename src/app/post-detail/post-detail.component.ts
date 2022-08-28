import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  searchText:string = '';

  post:Post = {
    id: 0,
    category_id:0,
    title:'',
    description:'',
    date:'',
    author:''
  };
  postId!:string | null;

  tags:string[] = ["foo","bar","baz"];

  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getpost(this.postId).subscribe((res) => {
      this.post = res;
    })

  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
