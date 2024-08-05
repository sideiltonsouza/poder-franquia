import { Component } from '@angular/core';

@Component({
  selector: 'app-gustavo',
  standalone: true,
  imports: [],
  templateUrl: './gustavo.component.html',
  styleUrl: './gustavo.component.css'
})
export class GustavoComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }

}
