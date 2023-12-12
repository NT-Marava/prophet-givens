import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('aboutSwiperOne') aboutSwiperOne!: ElementRef<SwiperContainer>;


  aboutSwiperOneConfig: SwiperOptions = {
    //   spaceBetween: 30,
    //   navigation: false,
    //  // slidesPerView: 3,
    //   speed: 1200,
    //   loop: true,
    //   effect: 'slide',
    //   autoplay: {
    //     delay: 1000,
    //   },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    }
}
