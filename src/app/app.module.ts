import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {RouterModule, Routes} from "@angular/router";
import { ListImagesComponent } from './list-images/list-images.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageItemComponent } from './image-item/image-item.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { ImageDetailComponent } from './image-detail/image-detail.component';

const appRoutes : Routes = [
  {path : ''  , component : ListImagesComponent},
  {path : 'detail/:id'  , component : ImageDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    ImageItemComponent,
    SearchComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
