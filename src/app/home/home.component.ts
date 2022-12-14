import { trigger, style , transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ transform: 'translateX(100px)',opacity:0 }, ),
        animate(2000) //transition
      ]) //void to default
    ]) //trigger(name, array)
  ]
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
  comp3(event: Event) {
    this.company = 'company3'
  }
  comp4(event: Event) {
    this.company = 'company4'
  }

}
