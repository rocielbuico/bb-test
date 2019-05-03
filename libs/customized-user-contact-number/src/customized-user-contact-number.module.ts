import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { CustomizedUserContactNumberComponent } from './customized-user-contact-number.component';

@NgModule({
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { CustomizedUserContactNumberComponent }
    })
  ],
  declarations: [CustomizedUserContactNumberComponent]
})
export class CustomizedUserContactNumberModule { }
