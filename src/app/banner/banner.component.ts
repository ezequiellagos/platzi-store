import { Component, OnInit, ViewChild } from '@angular/core';

import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];

  // @ViewChild('newSwiper') newSwiper: any;

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   console.log(this.newSwiper.swiperRef);
  //   //Swiper instance will be displayed in console
  // }

}
