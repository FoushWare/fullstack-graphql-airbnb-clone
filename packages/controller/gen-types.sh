#! /bin/bash
apollo-codegen introspect-schema http://localhost:4000 --output schema.json
apollo-codegen generate src/**/*.tsx --schema schema.json --target typescript --output src/operation-result-types.ts