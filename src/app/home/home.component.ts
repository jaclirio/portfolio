import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  company = 'company1';
  comp1(event: Event) {
    this.company= 'company1'
    //const span = document.getElementById('detail1')
    //span!.textContent = 'Wasd 1234';
  }
  comp2(event: Event) {
    this.company='company2'
    //const span = document.getElementById('detail2')
    //span!.textContent = 'Qwer 1234';
  }
}
