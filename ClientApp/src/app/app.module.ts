import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './proyecto/nav-menu/nav-menu.component';
import { HomeComponent } from './proyecto/home/home.component';
import { RegistroProyectoComponent } from './proyecto/registro-proyecto/registro-proyecto.component';
import { ConsultaProyectoComponent } from './proyecto/consulta-proyecto/consulta-proyecto.component';
import { PeticionesComponent } from './proyecto/peticiones/peticiones.component';
import { FooterComponent } from './proyecto/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RegistroProyectoComponent,
    ConsultaProyectoComponent,
    PeticionesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'app-registro-proyecto', component: RegistroProyectoComponent},
      { path: 'app-consulta-proyecto', component: ConsultaProyectoComponent},
      { path: 'app-peticiones', component: PeticionesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
