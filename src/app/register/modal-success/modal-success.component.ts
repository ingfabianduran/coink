import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css'],
})
export class ModalSuccessComponent implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-22
    * Metodo que cierra la modal y redirecciona a la pagina de login.
  */
  onClickButtonContinue(): void {
    this.modalController.dismiss(null);
    this.router.navigate(['login']);
  }
}