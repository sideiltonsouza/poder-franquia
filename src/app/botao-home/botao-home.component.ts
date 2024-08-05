import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-home',
  standalone: true,
  imports: [],
  templateUrl: './botao-home.component.html',
  styleUrl: './botao-home.component.css'
})
export class BotaoHomeComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }
}
