import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events: any[] = [];
  currentEvent!: any;
  slug!: any;

  name: string = '';
  email: string = '';
  phone: string = '';
  eventID!: number;
  location: string = '';
  job: string = '';

  constructor(private request: RequestService, private router: Router, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getEvents();

  }
  ngOnInit() {
    this.getEvents();
  }


  getEvents() {
    this.request.get("events/getall/").subscribe(
      result => {
        this.events = result;
        this.currentEvent = this.events.filter(a => a.slug === this.slug)[0];
        console.log(this.currentEvent)
      });
  }
  readonly Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    customClass: {
        popup: 'colored-toast'
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  registerForEvent() {
    const formData = {
      name: this.name,
      phone: this.phone,
      location: this.location,
      email: this.email,
      event_id: this.currentEvent.id,
      job: this.job
    };
    if (formData.job == "" || formData.job == null) {
      console.log(formData);
      this.request.post('/events/registration/', formData)
        .subscribe({
          next: (response: any) => {
            console.log(response)
            if (response.success) {
              this.Toast.fire({
                icon: 'success',
                title: response.message
              })
            } else{
              this.Toast.fire({
                icon: 'error',
                title: response.message
              })
            }
          }
        });
    }
  }
}
