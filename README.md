# node-red-contrib-meraki-dashboard-api-v1.0

A [Node-RED](https://nodered.org/) node for interacting with the [Cisco Meraki Dashboard API v1](https://developer.cisco.com/meraki/api-v1/).

This node provides access to **933 API endpoints** covering the full Meraki Dashboard API v1.70.0, including devices, networks, organizations, appliances, switches, wireless, cameras, sensors, and more.

Forked and updated from [Cory Guynn's original repo](https://github.com/dexterlabora/node-red-contrib-meraki-dashboard-api-v1).

## Changes

The complete list of changes from the original source:

### Architecture & Code

- Replaced 505 individual hand-written prototype methods in `lib.js` (18,564 lines) with a single generic `callEndpoint(operationId, parameters)` method (182 lines)
- Replaced the massive `if/else` chain in `node.js` (26,009 lines) with a generic parameter resolution loop that works for any endpoint (179 lines)
- Replaced the per-endpoint inline HTML generation in `node.html` (47,319 lines) with a dynamic UI that builds forms from endpoint definitions at runtime (349 lines of template)
- Extracted all API endpoint definitions into a declarative `endpoints.json` data file (operationId, HTTP method, path, parameters, tags, summaries, body examples)
- Total code reduction: ~91,900 lines → ~710 lines (99.2% reduction)

### New Files Added

- `endpoints.json` — Declarative definition of all API endpoints (now 933, up from around 500)
- `node.html.template` — Template file with `ENDPOINTS_PLACEHOLDER` marker used by the build script
- `build.js` — Build script that injects `endpoints.json` into the HTML template to produce `node.html`
- `update_from_openapi.js` — Script that downloads the latest Meraki OpenAPI spec from GitHub and regenerates `endpoints.json`

### API Coverage

- Updated from Meraki API v1.14.0 (500~ endpoints) to v1.70.0 (933 endpoints)
- Added over 400 new API endpoints across all product categories (sensor, secure connect, cloud monitoring, live tools, adaptive policy, etc.)
- GET: 502, PUT: 186, POST: 174, DELETE: 71

### Package Metadata

- Bumped package version from 1.14.0 to 2.0.0
- Updated description to reflect the new API version and endpoint count

### LICENSE File

- Replaced the placeholder text ("Apache-2.0") with the full Apache License 2.0 legal text

### What Stayed the Same

- Node type names (`meraki-dashboard-api-v1`, `meraki-dashboard-api-v1-service`) — existing flows won't break
- Message interface (`msg.payload`, `msg.statusCode`, `msg.headers`, `msg.responseUrl`) — fully backward compatible
- Configuration node structure (host, API key, header name) — existing credentials carry over
- Parameter resolution behavior (stored params, msg properties, type checking) — same logic, just generic
- Dependencies (`request`, `q`, `file-type`) — unchanged for compatibility


## Features

- All Meraki Dashboard API v1 endpoints available from a single node
- Cascading category/sub-category/filter selectors for easy endpoint discovery
- Parameters configurable in the node editor or passed dynamically via `msg` properties
- API host and key overridable per-message for multi-org workflows
- Body examples shown inline for POST/PUT operations
- Data-driven architecture — endpoints defined in a single JSON file for easy maintenance

## Installation

Copy the 'node-red-contrib-meraki-dashboard-api-v1' folder to your Node-Red modules directory.

Default location:
C:\Users\username\\.node-red\node_modules\node-red-contrib-meraki-dashboard-api-v1

Then restart Node-RED.

## Configuration

1. Drag the **Meraki Dashboard API v1** node onto your flow
2. Double-click to configure
3. Add a new **Service** configuration:
   - **API URL**: `https://api.meraki.com/api/v1` (default)
   - **Header Name**: `X-Cisco-Meraki-API-Key`
   - **API Key**: Your Meraki Dashboard API key
4. Select a **Category**, **Sub-Category**, and **Method**
5. Fill in the required parameters

### Getting an API Key

1. Log in to the [Meraki Dashboard](https://dashboard.meraki.com)
2. Navigate to **Organization → API & Webhooks**
3. Under **API keys and access**, generate your API key

See the [Meraki API documentation](https://developer.cisco.com/meraki/api-v1/authorization/) for more details.

## Usage

### Inputs

| Property | Type | Description |
|----------|------|-------------|
| `msg.payload` | object | For POST/PUT methods, the request body as a JSON object |
| `msg.service` | object | Optional. Override API host and/or key: `{ host: "https://...", apiKey: "..." }` |
| `msg.operationId` | string | Optional. Dynamically select which API method to call |
| `msg.<paramName>` | string | Any parameter can be passed as a message property (e.g., `msg.serial`, `msg.networkId`) |

### Outputs

| Property | Type | Description |
|----------|------|-------------|
| `msg.payload` | object | The API response body |
| `msg.statusCode` | number | HTTP status code |
| `msg.headers` | object | Response headers |
| `msg.responseUrl` | string | Final URL after redirects |

### Example Flow

```json
[
    {
        "id": "example1",
        "type": "inject",
        "name": "Get Org Devices",
        "props": [
            { "p": "organizationId", "v": "YOUR_ORG_ID", "vt": "str" }
        ],
        "wires": [["meraki1"]]
    },
    {
        "id": "meraki1",
        "type": "meraki-dashboard-api-v1",
        "name": "getOrganizationDevices",
        "method": "getOrganizationDevices",
        "wires": [["debug1"]]
    },
    {
        "id": "debug1",
        "type": "debug",
        "name": "Output"
    }
]
```

## Updating Endpoints

This node uses a data-driven architecture. All API endpoints are defined in `endpoints.json` and the code is fully generic. No per-endpoint logic exists in the source files.

To update to the latest Meraki API version:

```bash
cd node_modules/node-red-contrib-meraki-dashboard-api-v1
node update_from_openapi.js
node build.js
```

This downloads the latest [Meraki OpenAPI spec](https://github.com/meraki/openapi) from GitHub, regenerates `endpoints.json`, and rebuilds `node.html`. Restart Node-RED to pick up the changes.

## Project Structure

| File | Purpose |
|------|---------|
| `endpoints.json` | All API endpoint definitions (operationId, method, path, params, tags, summary) |
| `lib.js` | Generic API client with a single `callEndpoint()` method |
| `node.js` | Node-RED node logic — generic parameter resolution and API invocation |
| `node.html` | Node-RED editor UI — dynamically generated from endpoint data |
| `node.html.template` | Template for `node.html` with placeholder for endpoint data |
| `build.js` | Build script that injects `endpoints.json` into the HTML template |
| `update_from_openapi.js` | Downloads the latest Meraki OpenAPI spec and regenerates `endpoints.json` |

## Adding a Custom Endpoint

If you need to add an endpoint manually (e.g., a beta or private API), add an entry to `endpoints.json`:

```json
{
    "operationId": "getMyCustomEndpoint",
    "method": "GET",
    "path": "/organizations/{organizationId}/custom/endpoint",
    "params": [
        { "name": "organizationId", "in": "path", "type": "string", "required": true },
        { "name": "perPage", "in": "query", "type": "string", "required": false }
    ],
    "tags": ["organizations", "custom"],
    "summary": "Description of what this endpoint does"
}
```

Then run `node build.js` and restart Node-RED.

## Dependencies

- [request](https://www.npmjs.com/package/request) — HTTP client
- [q](https://www.npmjs.com/package/q) — Promise library
- [file-type](https://www.npmjs.com/package/file-type) — File type detection for multipart uploads

## Related Resources

- [Meraki Dashboard API Documentation](https://developer.cisco.com/meraki/api-v1/)
- [Meraki API Changelog](https://developer.cisco.com/meraki/whats-new/)
- [Meraki OpenAPI Spec (GitHub)](https://github.com/meraki/openapi)
- [Meraki Developer Community](https://community.meraki.com/t5/Developers-Meraki-Integrations/bd-p/api)
- [Node-RED Documentation](https://nodered.org/docs/)
- [Creating Node-RED Nodes](https://nodered.org/docs/creating-nodes/)

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See the [LICENSE](https://github.com/bakerdist/Node-Red-Meraki-Dashboard-API-v1.0/blob/main/node-red-contrib-meraki-dashboard-api-v1/LICENSE) file for details.

## Credits

Originally created by [Cory Guynn](https://github.com/dexterlabora).
Updated and maintained by [Austin Kutzer](https://github.com/AustinKutzer).

The Meraki Dashboard API is developed and maintained by [Cisco Meraki](https://www.meraki.com). This node is a community project and is not officially supported by Cisco.
