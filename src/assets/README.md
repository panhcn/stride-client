# Assets Directory

## Purpose
This directory contains static assets used throughout the application, such as images, icons, SVGs, and other media files.

## Contents
- `react.svg` - React logo SVG used in the application

## Asset Organization
As the project grows, consider organizing assets into subdirectories:
- `icons/` - UI icons and SVG icons
- `images/` - Photos and other bitmap images
- `logos/` - Brand logos and related assets
- `fonts/` - Custom font files (if not using CDN)

## Guidelines for Changes
1. Follow the established naming conventions:
   - Use `kebab-case.png` for all asset filenames
   - Group related assets in appropriate subdirectories
   - Use SVGs where possible for better scaling and smaller file sizes

2. Image Optimization:
   - Compress images before adding them to the repository
   - Consider using WebP format for better compression
   - Keep image dimensions appropriate for their usage

3. SVG Best Practices:
   - Clean up SVGs using tools like SVGO
   - Remove unnecessary metadata and attributes
   - Consider using SVG sprites for frequently used icons

4. Asset Imports:
   - Import assets directly in components: `import logo from '../assets/logo.svg'`
   - For dynamic assets, use the public directory instead

## Dependencies
- Assets in this directory are bundled with Vite during the build process
- SVGs can be imported directly as React components with appropriate Vite configuration
