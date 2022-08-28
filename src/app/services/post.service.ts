import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService{

  data = {};

  constructor(
    private base:BaseService
  ) {
    super(base.http)
   }

   public getposts(){
    return this.base.getReq('/posts/');
   }

   public getpost(id:any){
    return this.base.getReq('/posts/'+id);
   }

}
