import { Component } from '@angular/core';
import test from 'node:test';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  
  public srcAtual:string = document.location.pathname;
  public url = new URL(window.location.href);
  public src: any = this.url.searchParams.get("src")

  public teste: string  = this.src;

    public linkCompra:string = "https://pay.kiwify.com.br/0flVrnB" + this.srcAtual + '?src=' + this.teste;

}
