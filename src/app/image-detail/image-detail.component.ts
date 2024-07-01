import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImageService} from "../image.service";
import {Image} from "../modules/image";
import { ResponseImage } from '../modules/imageResponse';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent{


  image! : Image ;
  id : string;


  constructor(private route : ActivatedRoute, private imageService : ImageService) {
    this.id="";
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id']


    // @ts-ignore
    this.image = this.imageService.getImageById(this.id).subscribe(
      (response: ResponseImage) => {
        this.image = response.hits[0];
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }
}
