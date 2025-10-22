#!/bin/bash
set -e

echo "Cleaning npm cache..."
npm cache clean --force

echo "Removing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

echo "Installing dependencies with --legacy-peer-deps..."
npm install --legacy-peer-deps

echo "Installation complete!"
