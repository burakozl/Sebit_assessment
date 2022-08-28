import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  posts!:Post[];
  @Input() searchedText!:string;

  constructor(private postService:PostService,private router:Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  get sortByDate() {
    return this.posts.sort((a: any, b: any) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });

  }

  getPosts(){
    this.postService.getposts().subscribe((res) => {
      this.posts = res;
    });
  }
  showMore(postId:number){
    this.router.navigateByUrl('/post-detail/'+postId);
  }

}
