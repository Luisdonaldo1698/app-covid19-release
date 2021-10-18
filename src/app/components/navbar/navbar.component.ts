import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Roles } from '../../models/userRol.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title: string = '';
  @Input() rol: Roles = Roles.admin;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  ngOnInit() {}

  logout(){
    this.authService.logOut().then(resp => {
      console.log(resp);
      this.router.navigate(['/login']);
    }).catch(err => {
      console.log(err)
    });
  }

  goToProfile(){
    switch(this.rol){
      case Roles.doctor:
        this.router.navigate(['d/perfil'])
    }
  }

}
