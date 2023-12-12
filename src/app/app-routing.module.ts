import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { MinistryComponent } from './components/ministry/ministry.component';
import { WatchComponent } from './components/watch/watch.component';
import { PartnerWithUsComponent } from './components/partner-with-us/partner-with-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'ministry', component: MinistryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'partnership', component: PartnerWithUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
