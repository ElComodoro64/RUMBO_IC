import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarburantesService } from '../../services/carburantes.service';

@Component({
  selector: 'app-estaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estaciones.html',
  styleUrl: './estaciones.scss'
})
export class Estaciones implements OnChanges {
  @Input() idCCAA: string = '';
  estaciones: any[] = [];
  estacionesPaginadas: any[] = [];
  totalEstaciones: number = 0;
  cargando: boolean = false;

  constructor(
    private carburantesService: CarburantesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idCCAA'] && this.idCCAA) {
      this.cargando = true;
      this.carburantesService.getEstacionesPorCCAA(this.idCCAA).subscribe((data: any) => {
        this.estaciones = data.ListaEESSPrecio || [];
        this.totalEstaciones = this.estaciones.length;
        this.estacionesPaginadas = this.estaciones.slice(0, 50);
        this.cargando = false;
        this.cdr.detectChanges();
      });
    }
  }
}