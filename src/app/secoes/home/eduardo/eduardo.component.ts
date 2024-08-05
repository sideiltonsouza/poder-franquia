import { Component } from '@angular/core';

@Component({
  selector: 'app-eduardo',
  standalone: true,
  imports: [],
  templateUrl: './eduardo.component.html',
  styleUrl: './eduardo.component.css'
})
export class EduardoComponent {
  public compra = () =>{
    document.querySelectorAll(".compra")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
  }

}
