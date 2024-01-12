import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WatchComponent } from './components/watch/watch.component';
import { MinistryComponent } from './components/ministry/ministry.component';
import { EventsComponent } from './components/events/events.component';
import { PartnerWithUsComponent } from './components/partner-with-us/partner-with-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SafeHtmlPipe } from './util/safe-html.pipe';

import { SwiperDirective } from './directives/swiper.directive';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RequestService } from './services/request.service';
import { EventComponent } from './components/event/event.component';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    SwiperDirective,
    SafeHtmlPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WatchComponent,
    MinistryComponent,
    EventsComponent,
    PartnerWithUsComponent,
    ContactComponent,
    EventComponent
  ],
  imports: [
    HttpClientModule,
    YouTubePlayerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    provideClientHydration(),
    provideHttpClient(withFetch()),
    RequestService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
