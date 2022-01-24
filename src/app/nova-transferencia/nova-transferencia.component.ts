import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  public valor: number = 0;
  public destino: number = 0;

  public transferir(): void {
    console.log('Solicitada nova transferência');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
