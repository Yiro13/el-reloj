import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ContactModule } from './contact/contact.module';
import { NotFoundModule } from './not-found/not-found.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'productos', loadChildren: () => ProductsModule},
  {path: 'contacto', loadChildren: () => ContactModule},
  {path: '**', loadChildren: () => NotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
