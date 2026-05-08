/**
 * Downloads the latest Meraki OpenAPI spec from GitHub and generates
 * an updated endpoints.json with all available API endpoints.
 * 
 * Usage: node update_from_openapi.js
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const SPEC_URL = 'https://raw.githubusercontent.com/meraki/openapi/master/openapi/spec2.json';
const OUTPUT_PATH = path.join(__dirname, 'endpoints.json');

function download(url) {
    return new Promise((resolve, reject) => {
        console.log('Downloading OpenAPI spec...');
        let data = '';
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error('HTTP ' + res.statusCode));
                return;
            }
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function camelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function parseSpec(specJson) {
    const spec = JSON.parse(specJson);
    console.log('API Version:', spec.info.version);
    console.log('Parsing paths...');

    const endpoints = [];

    for (const [pathStr, pathObj] of Object.entries(spec.paths)) {
        for (const [method, operation] of Object.entries(pathObj)) {
            // Skip non-HTTP-method keys like "parameters"
            if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;

            const operationId = operation.operationId;
            if (!operationId) continue;

            // Extract parameters
            const params = [];
            if (operation.parameters) {
                for (const param of operation.parameters) {
                    if (param.in === 'path') {
                        params.push({
                            name: param.name,
                            in: 'path',
                            type: param.type || 'string',
                            required: true
                        });
                    } else if (param.in === 'query') {
                        params.push({
                            name: param.name,
                            in: 'query',
                            type: param.type || 'string',
                            required: param.required || false
                        });
                    } else if (param.in === 'body') {
                        params.push({
                            name: param.name || operationId,
                            in: 'body',
                            type: 'object',
                            required: param.required || false
                        });
                    }
                }
            }

            // Extract tags
            const tags = operation.tags || [];

            // Extract summary/description
            const summary = operation.summary || operation.description || operationId;

            // Extract body example from the parameter schema examples
            let bodyExample = undefined;
            if (operation.parameters) {
                const bodyParam = operation.parameters.find(p => p.in === 'body');
                if (bodyParam && bodyParam.schema && bodyParam.schema.example) {
                    bodyExample = bodyParam.schema.example;
                }
            }

            const endpoint = {
                operationId,
                method: method.toUpperCase(),
                path: pathStr,
                params,
                tags,
                summary
            };

            if (bodyExample) {
                endpoint.bodyExample = bodyExample;
            }

            endpoints.push(endpoint);
        }
    }

    return { endpoints, version: spec.info.version };
}

async function main() {
    try {
        const specJson = await download(SPEC_URL);
        console.log('Downloaded (' + (specJson.length / 1024 / 1024).toFixed(1) + ' MB)');

        const { endpoints, version } = parseSpec(specJson);

        // Sort endpoints by path then method for consistency
        endpoints.sort((a, b) => {
            if (a.path < b.path) return -1;
            if (a.path > b.path) return 1;
            const methodOrder = { GET: 0, POST: 1, PUT: 2, DELETE: 3, PATCH: 4 };
            return (methodOrder[a.method] || 5) - (methodOrder[b.method] || 5);
        });

        // Write output
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(endpoints, null, 2), 'utf8');

        // Stats
        const methods = {};
        endpoints.forEach(ep => {
            methods[ep.method] = (methods[ep.method] || 0) + 1;
        });

        console.log('\n=== Results ===');
        console.log('API Version: ' + version);
        console.log('Total endpoints: ' + endpoints.length);
        console.log('By method:', JSON.stringify(methods));
        console.log('Written to: ' + OUTPUT_PATH);

        // Compare with previous
        const prevPath = OUTPUT_PATH + '.bak';
        if (fs.existsSync(prevPath)) {
            const prev = JSON.parse(fs.readFileSync(prevPath, 'utf8'));
            const prevIds = new Set(prev.map(e => e.operationId));
            const newIds = new Set(endpoints.map(e => e.operationId));
            const added = endpoints.filter(e => !prevIds.has(e.operationId));
            const removed = prev.filter(e => !newIds.has(e.operationId));
            console.log('\nNew endpoints added: ' + added.length);
            console.log('Endpoints removed: ' + removed.length);
            if (added.length > 0 && added.length <= 20) {
                console.log('Added:', added.map(e => e.operationId).join(', '));
            }
        }

        console.log('\nDone! Run "node build.js" to update node.html');
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

main();
