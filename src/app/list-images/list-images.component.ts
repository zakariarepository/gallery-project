import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ResponseImage} from "../modules/imageResponse";

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit{

  public images:any[];

  constructor(private imageService : ImageService) {
    this.images=[];
  }

  ngOnInit(){
    this.getImages();
  }

  public getImages(): void {
    this.imageService.getImages().subscribe(
      (response: ResponseImage) => {
        this.images = response.hits;
        console.log(response.hits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  searchText : string ='';
  onSearchTextEnetered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
    if(searchValue!=''){
      this.imageService.getSearchedFilms(searchValue).subscribe(
        (response: ResponseImage) => {
          this.images = response.hits;
          console.log(response.hits);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }else {
      this.getImages();
    }
  }
}
