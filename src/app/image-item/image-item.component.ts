import {Component, Input} from '@angular/core';
import {Image} from "../modules/image";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {
  @Input() image! : Image;

  clickImage(){
     this.router.navigate([`detail/${this.image.id}`])
  }

  constructor(private router : Router) {
  }


}
