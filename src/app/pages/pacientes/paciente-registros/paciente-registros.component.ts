import { Component, OnInit } from '@angular/core';
import { RegistrarSintomasModel } from 'src/app/models/registrar-sintomas.model';
import { AuthService } from '../../../services/auth.service';
import { PacienteService } from '../../../services/paciente.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-registros',
  templateUrl: './paciente-registros.component.html',
  styleUrls: ['./paciente-registros.component.scss']
})
export class PacienteRegistrosComponent implements OnInit {

  registros: RegistrarSintomasModel[] = [];
  loading: boolean = false;

  registrosSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    private pacienteService: PacienteService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getRegistros();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.registrosSubscription?.unsubscribe();
  }

  getRegistros(){
    this.loading = true;
    const userId = this.authService.user?.userId;
    console.log(userId);
    this.registrosSubscription = this.pacienteService.listarRegistros(userId!).subscribe(resp => {
      this.registros = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.alertService.showAlert('Error', err, 'error');
    });
  }

  goToNuevoRegistro(){
    this.router.navigate(['/p/nuevo']);
  }

  verReceta(recetaUrl: string){
    console.log(recetaUrl)
    window.open(recetaUrl, "_blank")
  }

}
