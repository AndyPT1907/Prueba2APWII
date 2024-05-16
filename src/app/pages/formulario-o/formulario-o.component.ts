import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from '../../services/ordenes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-o',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-o.component.html',
  styleUrl: './formulario-o.component.css'
})
export class FormularioOComponent {
  id:any
  mesa:any
  producto:any
  total:any


  ordenes:any
  route = inject(Router)
  ruta = inject(ActivatedRoute)
  servicio = inject(OrdenesService)
  guardar( datos:any ){
    console.log(datos);
    this.servicio.postPersonal(datos.value).subscribe()
    this.route.navigateByUrl("gOrden")

  }
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.ordenes = p
    )

    )

  }
}
