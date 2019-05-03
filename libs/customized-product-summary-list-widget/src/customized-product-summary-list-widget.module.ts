import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { CustomizedProductSummaryListWidgetComponent } from './customized-product-summary-list-widget.component';
// import { ProductSummaryListWidgetModule } from '@backbase/retail-ang/product-summary';
// import { FormatAmountModule, ProductItemCurrentAccountModule} from '@backbase/ui-ang';

@NgModule({
imports: [
CommonModule,
BackbaseCoreModule.withConfig({
classMap: { CustomizedProductSummaryListWidgetComponent }
}),
// ProductSummaryListWidgetModule,
// FormatAmountModule,
// ProductItemCurrentAccountModule
],
declarations: [CustomizedProductSummaryListWidgetComponent]
})
export class CustomizedProductSummaryListWidgetModule { }