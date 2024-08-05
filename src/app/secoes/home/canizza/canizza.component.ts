import { Component } from '@angular/core';
import { BotaoHomeComponent } from "../../../botao-home/botao-home.component";

@Component({
  selector: 'app-canizza',
  standalone: true,
  imports: [BotaoHomeComponent],
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
