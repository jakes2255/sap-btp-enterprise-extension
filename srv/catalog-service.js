const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

    const northwind = await cds.connect.to('northwind_metadata')
    const localProducts = [
        { ProductID: 1, ProductName: 'Chai', SupplierID: 1, CategoryID: 1, QuantityPerUnit: '10 boxes x 20 bags', UnitPrice: 18, UnitsInStock: 39, UnitsOnOrder: 0, ReorderLevel: 10, Discontinued: false },
        { ProductID: 2, ProductName: 'Chang', SupplierID: 1, CategoryID: 1, QuantityPerUnit: '24 - 12 oz bottles', UnitPrice: 19, UnitsInStock: 17, UnitsOnOrder: 40, ReorderLevel: 25, Discontinued: false },
        { ProductID: 3, ProductName: 'Aniseed Syrup', SupplierID: 1, CategoryID: 2, QuantityPerUnit: '12 - 550 ml bottles', UnitPrice: 10, UnitsInStock: 13, UnitsOnOrder: 70, ReorderLevel: 25, Discontinued: false }
    ]

    this.on('READ', 'Products', async (req) => {
        try {
            return await northwind.run(req.query)
        } catch (error) {
            if (!cds.env.profiles.includes('development')) throw error
            return localProducts
        }
    })

})