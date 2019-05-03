window.document.addEventListener('DOMContentLoaded', () => {
  const services = {};
  const pageModel = {
    name: 'pt-banking-app-ang',
    properties: {},
    children: [{
      name: 'customized-user-address',
      properties: {
        classId: 'CustomizedUserAddressComponent'
      }
    }, {
      name: 'customized-user-contact-number',
      properties: {
        classId: 'CustomizedUserContactNumberComponent'
      }
    }, {
      name: 'customized-user-details',
      properties: {
        classId: 'CustomizedUserDetailsComponent'
      }
    }, {
      name: 'customized-product-summary-list-widget',
      properties: {
        classId: 'CustomizedProductSummaryListWidgetComponent'
      }
    }],
  };

  window.BB.startSingleApp(services)
    .then(app => app.bootstrap(pageModel));
});
