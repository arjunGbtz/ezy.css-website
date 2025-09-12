#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const PROJECT_DIR = path.join(SCRIPT_DIR, '..');
const CSS_FILE = path.join(SCRIPT_DIR, 'ezy.min.css');
const JSON_FILE = path.join(PROJECT_DIR, 'custom_colors.json');

const BLOCK_START = '/* EZYCSS CUSTOM COLORS START */';
const BLOCK_END = '/* EZYCSS CUSTOM COLORS END */';

// Helpers
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function removeOldBlock(css) {
    const blockRegex = new RegExp(`${escapeRegex(BLOCK_START)}[\\s\\S]*?${escapeRegex(BLOCK_END)}`, 'g');
    return css.replace(blockRegex, '');
}

function createCustomBlock(colors) {
    let keys = Object.keys(colors);
    let values = Object.values(colors);

    let block = BLOCK_START + ':root{';
    keys.forEach((key, i) => {
        block += `--color-${key}:${values[i]};`;
    });
    block += '}';
    keys.forEach((key) => {
        block += `.bg-${key}{background-color:var(--color-${key});}`;
        block += `.text-${key}{color:var(--color-${key});}`;
        block += `.bc-${key}{border-color:var(--color-${key});}`;
        block += `.deco-${key}{text-decoration-color: var(--color-${key});}`;
    });
    block += BLOCK_END;
    return block;
}

// the real ones
function updateColors() {
    if (!fs.existsSync(CSS_FILE)) {
        console.error(`CSS file not found: ${CSS_FILE}`);
        process.exit(1);
    }

    if (!fs.existsSync(JSON_FILE)) {
        console.error(`JSON file not found: ${JSON_FILE}`);
        process.exit(1);
    }

    const json = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
    if (!json.custom || typeof json.custom !== 'object') {
        console.error('JSON must have a "custom" object with color definitions.');
        process.exit(1);
    }

    let css = fs.readFileSync(CSS_FILE, 'utf-8');
    css = removeOldBlock(css);
    const customBlock = createCustomBlock(json.custom);
    css = customBlock + css;
    fs.writeFileSync(CSS_FILE, css, 'utf-8');
    console.log('Colors updated! Your CSS is now looking fancy.');
}

function setupColors() {
    const packageJsonPath = path.join(PROJECT_DIR, 'package.json');
    let packageJson = {};
    if (fs.existsSync(packageJsonPath)) {
        packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    }
    if (!packageJson.scripts) packageJson.scripts = {};
    packageJson.scripts['update-colors'] = 'node ezy/helper.js --update-colors';
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

    if (!fs.existsSync(JSON_FILE)) {
        const defaultColors = { custom: { foo: "#123456", bar: "#abcdef" } };
        fs.writeFileSync(JSON_FILE, JSON.stringify(defaultColors, null, 2), 'utf-8');
    }

    console.log('Setup completed');
}

const arg = process.argv[2];
switch(arg) {
    case '--update-colors':
        updateColors();
        break;
    case '--setup-colors':
        setupColors();
        break;
    default:
        console.log('No valid argument provided. Use --setup-colors or --update-colors.');
}