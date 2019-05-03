import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { CustomizedUserDetailsComponent } from './customized-user-details.component';

@NgModule({
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { CustomizedUserDetailsComponent }
    })
  ],
  declarations: [CustomizedUserDetailsComponent]
})
export class CustomizedUserDetailsModule { }
