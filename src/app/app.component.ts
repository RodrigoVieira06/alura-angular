import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-aluraangular';
  transferencia: any;

  public transferir($event: {}): void {
    console.log($event);
    this.transferencia = $event;
  }
}
