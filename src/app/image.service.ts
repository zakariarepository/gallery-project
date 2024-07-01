import { Injectable } from '@angular/core';
import {Image} from "./modules/image";
import {HttpClient} from "@angular/common/http";
import {ResponseImage} from "./modules/imageResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images : Array<Image>= [];
  API_TOKEN:any="34256302-8e3dd785be4445fa6706db57b"

  constructor(private http : HttpClient) {
    this.images=[]
  }

  getImages(){
    return this.http.get<ResponseImage>('https://pixabay.com/api/?key='+this.API_TOKEN+'&per_page=30');
  }

  getSearchedFilms(motcle : string){
    return this.http.get<ResponseImage>('https://pixabay.com/api/?key='+this.API_TOKEN+'&q='+motcle+'&image_type=photo');
  }

  public getImageById(id: String): Observable<ResponseImage> {
    return this.http.get<ResponseImage>(`https://pixabay.com/api/?key=34256302-8e3dd785be4445fa6706db57b&id=${id}`)
  }
}
