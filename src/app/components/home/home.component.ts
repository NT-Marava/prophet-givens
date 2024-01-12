import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
// import { RequesthandlerService } from 'src/services/requesthandler.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { RequestService } from '../../services/request.service';

declare var YT: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  articles: any[] = [];
  testimonials: any[] = [];
  category!: string;
  YT: any;
  player: any;


  events: any[] = [];

  isPlayerVisible = true;
  videoIds = [
    {
      id: '7jwL9jugjF8',
      title: 'Video 1 Title',
      posterUrl: 'assets/img/blog/blog_img01.jpg',
      description: 'Video 1 Description'
    },
    {
      id: 'zQ9N0BFRvaQ',
      title: 'Video 2 Title',
      posterUrl: 'https://example.com/poster2.jpg',
      description: 'Video 2 Description'
    },
    {
      id: 'DIL1Fis1Kh4',
      title: 'Video 3 Title',
      posterUrl: 'https://example.com/poster3.jpg',
      description: 'Video 3 Description'
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private requestService: RequestService) {

  }

  ngOnInit() {
    let slug = this.route.snapshot.paramMap.get('slug');

    this.getEvents();
  }



  

  ngAfterViewInit() {
    // this.swiper.nativeElement.swiper.activeIndex = this.index;
    // this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  @ViewChild('heroSwiper') heroSwiper!: ElementRef<SwiperContainer>;


  heroSwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    speed: 1500,            // added(slide speed)
    effect: 'fade',
    fadeEffect: {           // added
      crossFade: true     // added(resolve the overlapping of the slides)
    },        // added(apply fade effect)
    autoplay: {
      delay: 2000,
    },
  }


  getEvents(){
    this.requestService.get('events/getall').subscribe(response => {
      console.log(response);
      // Process the response data
    });
  }

}
