using { northwind_metadata as northwind } from './external/northwind-metadata';

@path: 'catalog'
service CatalogService {

    @readonly
    entity Products as projection on northwind.Products;

}