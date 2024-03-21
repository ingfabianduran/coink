import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que muestra el toast.
    * @param message Mensaje a mostrar.
    * @param color Color de la notificacion.
  */
  async showToast({ message = 'Registro creado', color = 'success' }): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color
    });
    toast.present();
    return toast;
  }
}