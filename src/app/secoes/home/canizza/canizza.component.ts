import { Component } from '@angular/core';

@Component({
  selector: 'app-canizza',
  standalone: true,
  imports: [],
  templateUrl: './canizza.component.html',
  styleUrl: './canizza.component.css'
})
export class CanizzaComponent {
 
public compra = () =>{
  document.querySelectorAll(".compra")[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
}

}
