# SAP BTP Enterprise Extension

Reference implementation of an SAP BTP enterprise extension architecture covering side-by-side extensibility, SAP CAP, SAP S/4HANA integration, secure connectivity, Fiori, and Generative AI/RAG.

## Architecture

The solution demonstrates how a loosely coupled extension can be implemented on SAP Business Technology Platform while keeping the core SAP S/4HANA system clean.

```text
                         SAP S/4HANA
                              │
                    APIs / OData / Events
                              │
                              ▼
                    SAP BTP Connectivity
                              │
                    ┌─────────┴─────────┐
                    │ SAP Destination   │
                    │ / Connectivity    │
                    └─────────┬─────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │      CAP Service        │
                 │                        │
                 │ Domain / API Layer     │
                 │ Integration            │
                 │ Authorization          │
                 │ Business Logic         │
                 └───────────┬────────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
          SAP Fiori / UI5          GenAI / RAG
                                     │
                                     ▼
                              LLM / AI Services
```

## Objectives

This project demonstrates practical patterns for:

* SAP BTP side-by-side extensibility
* SAP Cloud Application Programming Model (CAP)
* Integration with SAP S/4HANA and external OData services
* BTP Destination and Connectivity services
* SAP Fiori / UI5 consumption of CAP services
* Secure application access and authorization
* Clean Core-aligned extension architecture
* Generative AI integration
* Retrieval-Augmented Generation (RAG)
* Enterprise integration and API design
* Cloud Foundry deployment
* Architecture documentation and decision records

## Key Architecture Principles

### 1. Side-by-Side Extensibility

Business functionality that does not need to be implemented directly in the SAP S/4HANA core is developed as a loosely coupled extension on SAP BTP.

This supports a Clean Core approach by reducing modifications and keeping extensions independently deployable.

### 2. API-Based Integration

The CAP application consumes remote business services through APIs rather than directly accessing the underlying SAP S/4HANA database.

The initial implementation uses an external OData service to demonstrate the same integration pattern without requiring access to a customer SAP system.

### 3. Destination-Based Connectivity

External service connectivity is abstracted through SAP BTP Destinations.

This separates application code from environment-specific endpoint and authentication configuration.

### 4. CAP Service Layer

The CAP service provides the application and integration boundary between the user experience, external business services, and AI capabilities.

### 5. AI and RAG

The AI layer demonstrates how enterprise application context can be combined with Large Language Models and Retrieval-Augmented Generation.

The objective is to demonstrate the architecture and integration pattern rather than build a standalone AI product.

## Technology Stack

| Area                  | Technology                                    |
| --------------------- | --------------------------------------------- |
| Cloud Platform        | SAP Business Technology Platform              |
| Application Framework | SAP Cloud Application Programming Model (CAP) |
| Runtime               | SAP BTP, Cloud Foundry                        |
| Backend               | Node.js                                       |
| Service Definition    | CDS                                           |
| Integration           | OData / REST                                  |
| Connectivity          | SAP BTP Destination / Connectivity            |
| User Experience       | SAP Fiori / SAPUI5                            |
| Enterprise Backend    | SAP S/4HANA / external OData services         |
| AI                    | LLM / Generative AI                           |
| Knowledge Retrieval   | RAG                                           |
| Development           | SAP Business Application Studio / VS Code     |
| Source Control        | Git / GitHub                                  |

## Repository Structure

```text
sap-btp-enterprise-extension/
│
├── app/
│   └── fiori/
│
├── db/
│
├── srv/
│   ├── external/
│   ├── ai/
│   ├── catalog-service.cds
│   └── catalog-service.js
│
├── rag/
│
├── docs/
│   ├── architecture.md
│   ├── destination.md
│   ├── integration.md
│   └── rag-architecture.md
│
├── package.json
├── mta.yaml
├── .gitignore
└── README.md
```

## Current Implementation

The initial implementation focuses on remote OData consumption through SAP BTP Destination and CAP.

```text
External OData Service
        │
        ▼
 BTP Destination
        │
        ▼
      CAP
        │
        ▼
   Fiori / UI5
```

The initial remote service is intentionally based on a publicly available OData service so that the architecture can be demonstrated without exposing an SAP customer system.

Future iterations will introduce:

* SAP S/4HANA integration
* CAP persistence
* Authentication and authorization
* Fiori Elements
* LLM integration
* RAG-based knowledge retrieval
* Event-driven integration
* Production-oriented deployment patterns

## Getting Started

### Prerequisites

* Node.js
* npm
* Git
* SAP Business Application Studio or VS Code
* SAP BTP account for cloud deployment
* Cloud Foundry environment for deployment scenarios

### Clone the Repository

```bash
git clone https://github.com/<your-user>/sap-btp-enterprise-extension.git
cd sap-btp-enterprise-extension
```

### Install Dependencies

```bash
npm install
```

### Start the CAP Application

```bash
cds watch
```

The local CAP server can then be used to validate the service implementation before deploying to SAP BTP.

## Deployment

The target deployment architecture is SAP BTP, Cloud Foundry.

```text
GitHub
   │
   ▼
Development
   │
   ▼
SAP Business Application Studio
   │
   ▼
Build / MTA
   │
   ▼
SAP BTP Cloud Foundry
   │
   ├── CAP Application
   ├── Destination Service
   ├── Authorization
   └── Connectivity
```

Environment-specific configuration such as destinations, credentials, service bindings, and secrets should not be stored in source control.

## Architecture Documentation

Detailed architecture decisions are maintained under the `docs/` directory.

Planned documents include:

* [Architecture Overview](docs/architecture.md)
* [Destination and Connectivity](docs/destination.md)
* [Integration Architecture](docs/integration.md)
* [RAG Architecture](docs/rag-architecture.md)

## Security

Secrets, API keys, passwords, tokens, and environment-specific credentials must never be committed to this repository.

Use SAP BTP service bindings, destinations, environment variables, or other appropriate secret-management mechanisms for deployment environments.

## Disclaimer

This repository is an independent technical reference implementation created for demonstration and learning purposes.

It is not an official SAP product or SAP reference implementation.

SAP, SAP S/4HANA, SAP BTP, SAP CAP, SAP Fiori, and SAPUI5 are trademarks or registered trademarks of SAP SE or its affiliates.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.