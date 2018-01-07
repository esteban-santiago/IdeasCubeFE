import { NgModule } from '@angular/core';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
//
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//



@NgModule({
  imports: [
    ApplicationsRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ApplicationsComponent ]
})
export class ApplicationsModule { }
