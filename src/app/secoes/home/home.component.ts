import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }

}
