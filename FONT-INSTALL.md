# Font Installation Guide for System3 Website

This guide explains how to set up the Söhne font family for the System3 website, ensuring the brand typography is correctly implemented.

## Required Font Files

The following font files are needed for full implementation of the System3 brand typography:

### Söhne (Regular Width)
- `soehne-web-buch.otf` - Regular/Book (400)
- `soehne-web-buch-kursiv.otf` - Regular/Book Italic (400)
- `soehne-web-kraftig.otf` - Medium (500)
- `soehne-web-kraftig-kursiv.otf` - Medium Italic (500)
- `soehne-web-halbfett.otf` - Semibold (600)

### Söhne Breit (Wide Cut)
- `soehne-breit-web-kraftig.otf` - Medium (500)
- `soehne-breit-web-halbfett.otf` - Semibold (600)

### Söhne Mono
- `soehne-mono-web-buch.otf` - Regular/Book (400)

## Installation Steps

1. Create the fonts directory if it doesn't exist:
   ```bash
   mkdir -p public/fonts
   ```

2. Place all the Söhne font files in the `public/fonts/` directory.

3. Verify the font files are correctly named according to the list above.

4. Restart your development server to load the new fonts.

## CSS Integration

The font files are already configured in the `/src/styles/fonts.css` file, which loads them with the correct font-face declarations.

## Font Licensing

Söhne is a commercial typeface from Klim Type Foundry. Ensure you have the proper licensing for your use case:

- Visit [Klim Type Foundry](https://klim.co.nz/retail-fonts/soehne/) for purchasing the font
- Develop with the fallback fonts during development if needed
- Only deploy the website with the Söhne fonts when properly licensed

## Fallback System

If the Söhne fonts are not available, the website will automatically fall back to:

- **For headings (Söhne Breit)**: Inter Tight, Poppins, sans-serif
- **For body text (Söhne)**: Inter, system UI fonts
- **For monospace (Söhne Mono)**: IBM Plex Mono, Source Code Pro, monospace

These fallback fonts are loaded from Google Fonts and provide a reasonably close approximation of the intended design while ensuring the site looks good even without the premium Söhne typeface.