import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//Para poder hacer una peticion angular
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './primer/primer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // <-- Añadimos esta línea 
import { ClientesService } from './primer/clientes.service';
import { DestacarDirective } from './destacar.directive';
import { Routes, RouterModule } from '@angular/router';
import { BorrarPipe } from './borrar.pipe';



// const rutas: Routes = [
//   { path: 'primer', component: PrimerComponent },
//   { path: '', component: CuerpoComponent}
// ];

const rutas: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'pie', component: CuerpoComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: PrimerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    CabeceraComponent,
    PieComponent,
    CuerpoComponent,
    MenuComponent,
    DestacarDirective,
    BorrarPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,//Para añadir httpclientmodule a mis imports
    RouterModule.forRoot(rutas)    // <-- Esta línea también la añadimos 
  ],
  providers: [ClientesService],//Aqui indicamos los servicios //las petis
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
//parte que carga todos los componentes. Si cargamos la peticion ajax aqui podemos acceder a ella
//desde cualquier componente 
