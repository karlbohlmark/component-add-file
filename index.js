#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var args = process.argv.slice(2);
var jsonPath = path.join(process.cwd(), 'component.json');
var json = JSON.parse(fs.readFileSync(jsonPath));

json.files = (json.files || []).concat(args);
fs.writeFileSync(jsonPath, JSON.stringify(json));
