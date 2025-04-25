# Public Directory

## Purpose
This directory contains static assets that are served directly without being processed by the build system. Files in this directory are copied as-is to the build output directory.

## Contents
- `vite.svg` - Vite logo SVG used in the application

## When to Use the Public Directory
Use this directory for:
1. Assets that need to be referenced by their exact filename
2. Assets that need a public URL that doesn't change
3. Large files that don't need to be processed by the build system
4. Files that need to be accessible at a specific URL path
5. Robots.txt, favicon.ico, manifest.json, and other special files

## Guidelines for Changes
1. File Organization:
   - Keep the public directory clean and organized
   - Group related files in subdirectories if needed
   - Use descriptive filenames

2. Referencing Public Assets:
   - In HTML: `<img src="/vite.svg" />`
   - In JSX: `<img src={import.meta.env.BASE_URL + 'vite.svg'} />`
   - This ensures the assets work correctly with any base URL configuration

3. When NOT to Use Public:
   - For assets that should be processed by the build system
   - For assets that are imported directly by components
   - For assets that benefit from bundling and optimization

## Important Notes
- Files in the public directory don't get post-processed or bundled
- Missing files will not be compiled and will cause 404 errors
- The public directory is ideal for robots.txt, favicon.ico, and similar files
- Consider using the `src/assets` directory for files that should be processed by the build system
