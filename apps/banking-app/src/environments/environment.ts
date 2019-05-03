import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
 
export const environment = {
  production: false,
  mockProviders: [createMocksInterceptor(), ProductSummaryDataHttpMocksProvider],
};