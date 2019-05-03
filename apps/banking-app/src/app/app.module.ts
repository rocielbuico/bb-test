import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ProductSummaryListWidgetModule } from '@backbase/retail-ang/product-summary';
import { CustomizedProductSummaryListWidgetModule } from '@peachtree/customized-product-summary-list-widget';  // ADD THIS LINE!
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomizedUserDetailsModule } from '@peachtree/customized-user-details';
import { CustomizedUserContactNumberModule } from '@peachtree/customized-user-contact-number';
import { CustomizedUserAddressModule } from '@peachtree/customized-user-address';

@NgModule({
  imports: [
    BrowserModule,
    BackbaseCoreModule,
    ProductSummaryListWidgetModule,                                                    // ADD THIS LINE!
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }), CustomizedProductSummaryListWidgetModule,
    NgbModule.forRoot(),
    CustomizedUserDetailsModule,
    CustomizedUserContactNumberModule,
    CustomizedUserAddressModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

