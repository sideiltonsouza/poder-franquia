import { Component } from '@angular/core';

@Component({
  selector: 'app-wilton',
  standalone: true,
  imports: [],
  templateUrl: './wilton.component.html',
  styleUrl: './wilton.component.css'
})
export class WiltonComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }

}
