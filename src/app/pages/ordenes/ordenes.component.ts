import { Component } from '@angular/core';
import { TablaPedidosComponent } from '../../components/tabla-pedidos/tabla-pedidos.component';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [TablaPedidosComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

}
