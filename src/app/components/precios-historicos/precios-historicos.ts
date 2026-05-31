import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CarburantesService } from '../../services/carburantes.service';

@Component({
  selector: 'app-precios-historicos',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './precios-historicos.html',
  styleUrl: './precios-historicos.scss'
})
export class PreciosHistoricos implements OnChanges {
  @Input() idProvincia: string = '';
  productos: any[] = [];
  selectedProducto: string = '';
  selectedFecha: Date | null = null;
  precios: any[] = [];
  cargando: boolean = false;

  constructor(
    private carburantesService: CarburantesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cargar();
  }

  ngOnInit(): void {
    this.carburantesService.getProductos().subscribe((data: any) => {
      this.productos = data;
      this.cdr.detectChanges();
    });
  }

  onFiltroChange(): void {
    this.cargar();
  }

  private cargar(): void {
    if (this.idProvincia && this.selectedProducto && this.selectedFecha) {
      const fecha = this.formatFecha(this.selectedFecha);
      this.cargando = true;
      this.carburantesService.getPreciosHistoricos(fecha, this.idProvincia, this.selectedProducto).subscribe((data: any) => {
        this.precios = data.ListaEESSPrecio || [];
        this.cargando = false;
        this.cdr.detectChanges();
      });
    }
  }

  private formatFecha(fecha: Date): string {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }
}