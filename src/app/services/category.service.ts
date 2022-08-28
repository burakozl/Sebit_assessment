import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  data = {};

  constructor(
    private base:BaseService
  ) {
    super(base.http)
   }

   public getCategories(){
    return this.base.getReq('/categories');
   }
   public getCategory(id:any){
    return this.base.getReq('/categories/'+id);
   }
}
