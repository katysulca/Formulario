import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   
import {​​​​​ DataTablesModule }​​​​​ from'angular-datatables';
import { ChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { OrdenDeCompraComponent } from './orden-de-compra/orden-de-compra.component';
import { ReportesdemovimientosdiariosComponent } from './reportesdemovimientosdiarios/reportesdemovimientosdiarios.component';
import { InsumoComponent } from './insumo/insumo.component';
import { DespensaComponent } from './insumo/despensa/despensa.component';
import { UtensiliosComponent } from './insumo/utensilios/utensilios.component';
import { PanesComponent } from './productos/panes/panes.component';
import { PastelesComponent } from './productos/pasteles/pasteles.component';
import { BarrasComponent } from './barras/barras.component';
import { EgresosComponent } from './egresos/egresos.component';
import { InventarioComponent } from './inventario/inventario.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    OrdenDeCompraComponent,
    ReportesdemovimientosdiariosComponent,
    InsumoComponent,
    DespensaComponent,
    UtensiliosComponent,
    PanesComponent,
    PastelesComponent,
    BarrasComponent,
    EgresosComponent,
    InventarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
