import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number;
  name: string = '';
  email: string = '';
  phone: string = '';
  // subject!: string;
  message: string = '';
  job: string = '';

  constructor(private http: HttpClient) {
    this.currentYear = new Date().getFullYear();
  }

  readonly Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    iconColor: 'white',
    timerProgressBar: true,
    customClass: {
        popup: 'colored-toast'
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })

  submitForm() {
    const formData = {
      name: this.name,
      phone: this.phone,
      message: this.message,
      email: this.email,
      job: this.job
    };
    if (formData.job == "" || formData.job == null) {
      console.log(formData);
      this.http.post('https://prophetgivenschizenga.com/send_email.php', formData)
        .subscribe({
          next: (response: any) => {
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