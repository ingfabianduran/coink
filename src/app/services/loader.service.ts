import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loadingController: LoadingController) { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que muestra el loader.
    * @param message Mensaje a mostrar.
  */
  async showLoader({ message = 'Cargando...' }): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingController.create({
      message: message
    });
    loader.present();
    return loader;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que oculta el loader.
    * @param loader Loader a cerrar.
  */
  async hideLoader(loader: HTMLIonLoadingElement): Promise<void> {
    if (loader) await loader.dismiss();
  }
}