import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes';

@Injectable({
  providedIn: 'root'
})
export class CarburantesService {

  constructor(private http: HttpClient) {}

  getComunidadesAutonomas(): Observable<any> {
    return this.http.get(`${BASE_URL}/Listados/ComunidadesAutonomas/`);
  }

  getProvincias(): Observable<any> {
    return this.http.get(`${BASE_URL}/Listados/Provincias/`);
  }

  getProductos(): Observable<any> {
    return this.http.get(`${BASE_URL}/Listados/ProductosPetroliferos/`);
  }

  getEstacionesPorCCAA(idCCAA: string): Observable<any> {
    return this.http.get(`${BASE_URL}/EstacionesTerrestres/FiltroCCAA/${idCCAA}`);
  }

  getPostesMaritivosPorProvincia(idProvincia: string): Observable<any> {
    return this.http.get(`${BASE_URL}/PostesMaritimos/FiltroProvincia/${idProvincia}`);
  }

  getPreciosHistoricos(fecha: string, idProvincia: string, idProducto: string): Observable<any> {
    return this.http.get(`${BASE_URL}/EstacionesTerrestresHist/FiltroProvinciaProducto/${fecha}/${idProvincia}/${idProducto}`);
  }

  getProvinciasPorCCAA(idCCAA: string): Observable<any> {
    return this.http.get(`${BASE_URL}/Listados/ProvinciasPorComunidad/${idCCAA}`);
  }
  
}