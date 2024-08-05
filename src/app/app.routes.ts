import { Routes } from '@angular/router';
import { HomeComponent } from './secoes/home/home.component';
import { EduardoComponent } from './secoes/home/eduardo/eduardo.component';
import { ZanonComponent } from './secoes/home/zanon/zanon.component';
import { RodrigoComponent } from './secoes/home/rodrigo/rodrigo.component';
import { WiltonComponent } from './secoes/home/wilton/wilton.component';
import { CanizzaComponent } from './secoes/home/canizza/canizza.component';
import { GustavoComponent } from './secoes/home/gustavo/gustavo.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'eduardo', component: EduardoComponent
    },
    {
        path: 'zanon', component: ZanonComponent
    },
    {
        path: 'rb', component: RodrigoComponent
    },
    {
        path: 'wilton', component: WiltonComponent
    },
    {
        path: 'cannizza', component: CanizzaComponent
    },
    {
        path: 'gustavo', component: GustavoComponent
    },
    {
        path: '**', component: HomeComponent
    }

];
