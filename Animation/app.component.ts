import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("fade",[
      state("show",style({
        visibility:"visible",transform: "translateY(0%)"
      })),
      transition("show <=> *",animate("150ms"))
    ])
  ]
})

export class AppComponent {
  title = 'animation';
  show = false;

  get stateName(){
    return this.show ? "show":"hide";
  }

  toggle(){
    this.show = !this.show;
  }
}
