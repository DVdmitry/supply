import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 5500, noPause: true}}]
})
export class HomeComponent implements OnInit {

    brandArray1 = [
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/knauf.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/Gardena.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/iek.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/Tarkett.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/huyndai.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/onduline.jpg",
    "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/blackdecker.JPG"]

    brandArray2 = [
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/abb.JPG",
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/dewalt.JPG",
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/condor.JPG",
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/curver.jpg",
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/husqv.jpg",
        "https://s3.eu-west-2.amazonaws.com/first-supplier-pict/brand/Palisad.png"
        ]

  constructor() {}
  ngOnInit() {

  }

}
