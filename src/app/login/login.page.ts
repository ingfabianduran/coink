import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que redirecciona a la pagina de registro de clientes.
  */
  onClickRedirectPageRegister(): void {
    this.router.navigate(['register']);
  }
}