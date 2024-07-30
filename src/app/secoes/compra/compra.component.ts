import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  
  public srcAtual:string = document.location.pathname;

  public linkCompra:string = "https://pay.kiwify.com.br/0flVrnB" + this.srcAtual.replace('/','?src=');



}
