import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "producto/list",
    component: ProductoListComponent
  },

  {
    path: "producto/create",
    component: ProductoFormComponent
  },

  {
    path: "producto/edit/:id",
    component: ProductoFormComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
