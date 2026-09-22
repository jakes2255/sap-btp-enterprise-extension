# Getting Started

Welcome to your new CAP project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`readme.md` | this getting started guide

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start with your domain model, in a CDS file in `db/`

## Fiori Elements App

This project includes a Fiori Elements List Report/Object Page for `CatalogService/Products` in `app/catalog-ui`.

1. Run `npm install` in the project root.
2. Run `cds watch`.
3. Open <http://localhost:4004/catalogui/index.html>.

The app reads from the local OData V4 service at <http://localhost:4004/odata/v4/catalog/>.

## Learn More

Learn more at <https://cap.cloud.sap>.
