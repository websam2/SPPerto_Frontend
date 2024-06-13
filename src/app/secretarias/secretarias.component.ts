import { Component, Input, NgModule } from '@angular/core';


@Component({
  selector: 'app-secretarias',
  templateUrl: './secretarias.component.html',
  styleUrls: ['./secretarias.component.css']
})

export class SecretariasComponent {
  @Input() secretarias: any[] = [];
}
