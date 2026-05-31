import { Component, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CarburantesService } from './services/carburantes.service';
import { Estaciones } from './components/estaciones/estaciones';
import { PostesMaritimos } from './components/postes-maritimos/postes-maritimos';
import { PreciosHistoricos } from './components/precios-historicos/precios-historicos';
import { AcercaDe } from './components/acerca-de/acerca-de';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    Estaciones,
    PostesMaritimos,
    PreciosHistoricos,
    AcercaDe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('rumbo');

  comunidades: any[] = [];
  provincias: any[] = [];
  selectedCCAA: string = '';
  selectedProvincia: string = '';
  esRutaExterna: boolean = false;

  constructor(
    private carburantesService: CarburantesService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.esRutaExterna = event.url.includes('/prototipo');
      }
    });
  }

  ngOnInit(): void {
    this.carburantesService.getComunidadesAutonomas().subscribe((data: any) => {
      this.comunidades = data;
    });
  }

  onCCAAChange(id: string): void {
    this.selectedCCAA = id;
    this.selectedProvincia = '';
    this.carburantesService.getProvinciasPorCCAA(id).subscribe((data: any) => {
      this.provincias = data;
    });
  }

  onProvinciaChange(id: string): void {
    this.selectedProvincia = id;
  }
}