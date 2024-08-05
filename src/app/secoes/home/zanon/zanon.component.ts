import { Component } from '@angular/core';

@Component({
  selector: 'app-zanon',
  standalone: true,
  imports: [],
  templateUrl: './zanon.component.html',
  styleUrl: './zanon.component.css'
})
export class ZanonComponent {
  
public compra = () =>{
  document.querySelectorAll(".compra")[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
}

}
