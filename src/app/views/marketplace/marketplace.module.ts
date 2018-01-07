import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';

@NgModule({
  imports: [
    MarketplaceRoutingModule
  ],
  declarations: [ MarketplaceComponent ]
})
export class MarketplaceModule {}
