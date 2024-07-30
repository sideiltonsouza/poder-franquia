import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './secoes/home/home.component';
import { Secao2Component } from "./secoes/secao2/secao2.component";
import { LocalComponent } from "./secoes/local/local.component";
import { OPoderComponent } from "./secoes/o-poder/o-poder.component";
import { CompraComponent } from "./secoes/compra/compra.component";
import { PalestrantesComponent } from "./secoes/palestrantes/palestrantes.component";
import { FooterComponent } from "./secoes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, Secao2Component, LocalComponent, OPoderComponent, CompraComponent, PalestrantesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'poder-franquia';
}

