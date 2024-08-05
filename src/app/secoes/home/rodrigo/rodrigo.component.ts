import { Component } from '@angular/core';

@Component({
  selector: 'app-rodrigo',
  standalone: true,
  imports: [],
  templateUrl: './rodrigo.component.html',
  styleUrl: './rodrigo.component.css'
})
export class RodrigoComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }

}
