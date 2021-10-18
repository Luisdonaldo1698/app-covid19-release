import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { RegistrosComponent } from '../registros/registros.component';
import { CrearRecetaComponent } from '../crear-receta/crear-receta.component';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: '',
        component: RegistrosComponent,
      },
      {
        path: 'crear-receta',
        component: CrearRecetaComponent,
      },
      {
        path: 'perfil',
        component: DoctorProfileComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
