import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  window.onload = () => {
    const  animar = document.querySelectorAll("h1")

animar.forEach(ele => {
    ele.addEventListener('click', () =>{
        console.log(document.location.pathname)
    })
});

}