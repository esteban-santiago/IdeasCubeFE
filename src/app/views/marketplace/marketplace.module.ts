import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';

// Importo Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    MarketplaceRoutingModule,
    BsDropdownModule
  ],
  declarations: [ MarketplaceComponent ]
})
export class MarketplaceModule {}
