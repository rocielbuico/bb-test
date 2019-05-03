import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { CustomizedUserAddressComponent } from './customized-user-address.component';

@NgModule({
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { CustomizedUserAddressComponent }
    })
  ],
  declarations: [CustomizedUserAddressComponent]
})
export class CustomizedUserAddressModule { }
