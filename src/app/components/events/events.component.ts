import { Component, ElementRef, ViewChild } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})


export class EventsComponent {
events:any [] = [];

@ViewChild('eventsSwiperOne') eventsSwiperOne!: ElementRef<SwiperContainer>;


eventsSwiperOneConfig: SwiperOptions = {
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
constructor(private requestService: RequestService, private router: Router, private route: ActivatedRoute){

}

ngOnInit(){
  let slug = this.route.snapshot.paramMap.get('slug');
this.getEvents();
}

getEvents(){
  this.requestService.get('events/getall').subscribe(response => {
    console.log(response);
    this.events = response;
    console.log(this.events);
  });
}

}
