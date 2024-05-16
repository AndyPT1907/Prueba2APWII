import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrdenesService } from '../../services/ordenes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-pedidos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla-pedidos.component.html',
  styleUrl: './tabla-pedidos.component.css'
})
export class TablaPedidosComponent {
  servicio = inject(OrdenesService)

  ordenes : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.ordenes = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  mesa : any
}
