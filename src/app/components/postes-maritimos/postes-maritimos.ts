import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarburantesService } from '../../services/carburantes.service';

@Component({
  selector: 'app-postes-maritimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postes-maritimos.html',
  styleUrl: './postes-maritimos.scss'
})
export class PostesMaritimos implements OnChanges {
  @Input() idProvincia: string = '';
  postes: any[] = [];
  cargando: boolean = false;

  constructor(
    private carburantesService: CarburantesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idProvincia'] && this.idProvincia) {
      this.cargando = true;
      this.carburantesService.getPostesMaritivosPorProvincia(this.idProvincia).subscribe((data: any) => {
        this.postes = data.ListaEESSPrecio || [];
        this.cargando = false;
        this.cdr.detectChanges();
      });
    }
  }
}