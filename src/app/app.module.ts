import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { BaseService } from './services/base.service';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormsModule  } from '@angular/forms';
import { SearchfieldComponent } from './searchfield/searchfield.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    PostDetailComponent,
    CategoryPageComponent,
    SearchfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
