sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"catalogui/test/integration/pages/ProductsList",
	"catalogui/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, ProductsList, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('catalogui') + '/test/flpSandbox.html#catalogui-tile',
        pages: {
			onTheProductsList: ProductsList,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

