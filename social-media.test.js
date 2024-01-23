const fs = require('fs');
const path = require('path');

// Chargement du contenu du fichier HTML
const htmlPath = path.resolve(__dirname, 'social-media.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Teste si le fichier HTML contient la balise <title> avec le texte 'Social Media'
test('Social Media HTML has the title tag with "Social Media"', () => {
    expect(htmlContent).toContain('<title>Social Media</title>');
});

// Teste si le fichier HTML contient la balise <h1> avec le texte 'Hello world!'
test('Social Media HTML has the h1 tag with "Hello world!"', () => {
    expect(htmlContent).toContain('<h1>Hello world!</h1>');
});

// Teste si le fichier HTML contient la balise <body>
test('Social Media HTML has the body tag', () => {
    expect(htmlContent).toContain('<body>');
});

// Teste si le fichier HTML contient la balise de fermeture </body>
test('Social Media HTML has the closing body tag', () => {
    expect(htmlContent).toContain('</body>');
});

// Teste si le fichier HTML contient la balise <html>
test('Social Media HTML has the html tag', () => {
    expect(htmlContent).toContain('<html');
});

// Teste si le fichier HTML contient la balise de fermeture </html>
test('Social Media HTML has the closing html tag', () => {
    expect(htmlContent).toContain('</html>');
});
