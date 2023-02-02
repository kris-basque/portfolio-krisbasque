import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restrict-form',
  templateUrl: './restrict-form.component.html',
  styleUrls: ['./restrict-form.component.css']
})
export class RestrictFormComponent {
  keyword = 'uxisnotui';

  constructor(
    private router: Router
  ) { }


  onSubmit(f: NgForm) {
    if (f.valid) {
      if (f.value.password === this.keyword) {
        window.sessionStorage.setItem('session', 'true');
        window.scrollTo(0, 0);
        this.router.navigate(['/area-restrita']);
      } else {
        console.log('senha inválida');
      }
    }
  }
}
