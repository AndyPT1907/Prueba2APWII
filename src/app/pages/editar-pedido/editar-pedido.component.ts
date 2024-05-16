import { Component, inject } from '@angular/core';
import { OrdenesComponent } from '../ordenes/ordenes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from '../../services/ordenes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pedido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent {
  id:any
  mesa:any
  producto:any
  total:any
  

orden:any

servicio = inject(OrdenesService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("gOrden")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idOrden']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.orden= e
     })
 
 
    })
   }
}
