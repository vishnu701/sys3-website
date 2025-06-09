# System3 Logo Assets

This directory contains the official System3 logo assets in various formats.

## Directory Structure

- `/full` - Contains the full logo with text
- `/mark` - Reserved for the logo mark only (without text)

## Usage Guidelines

### Full Logo (with text)

The full logo should be used in headers, email signatures, and any official documents or marketing materials where the complete brand identity should be displayed.

### Logo Mark (without text)

The logo mark (when added) should be used in space-constrained contexts like favicons, app icons, or social media profile pictures where the full logo might be too detailed.

## File Formats

- `.png` - Use for web and digital applications where transparency is needed
- `.jpg` - Use for print materials or when transparency is not required

## Adding New Logo Files

When adding new logo variations:

1. Follow the existing naming convention
2. Place files in the appropriate subdirectory
3. Ensure the files are properly optimized for their intended use
4. Update this README if necessary

## Updating the Logo in the Application

The logo is currently used in the following locations:

1. Header component (`/src/components/TheHeader.vue`)
2. Favicon (in `/public` directory)
3. Any other locations that reference the logo

When updating the logo, ensure all instances are updated for consistency.