import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-user.component.html',
  styleUrl: './formulario-user.component.css'
})
export class FormularioUserComponent {
  id:any
  email:any
  password:any
  role:any


  user:any
  route = inject(Router)
  ruta = inject(ActivatedRoute)
  servicio = inject(UsersService)
  guardar( datos:any ){
    console.log(datos);
    this.servicio.postPersonal(datos.value).subscribe()
    this.route.navigateByUrl("usuarios")

  }
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.user = p
    )

    )

  }
}
