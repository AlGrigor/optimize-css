// src/index.js

const fs = require('fs');
const path = require('path');
const removeDuplicateCSS = require('./removeDuplicates');

const inputDir = path.join(__dirname, 'input');
const outputDir = path.join(__dirname, '..', 'output');

// Чтение всех файлов из папки input
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);

    fs.readFile(inputFilePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${inputFilePath}:`, err);
        return;
      }

      const cleanedCSS = removeDuplicateCSS(data);

      fs.writeFile(outputFilePath, cleanedCSS, err => {
        if (err) {
          console.error(`Error writing file ${outputFilePath}:`, err);
          return;
        }

        console.log(`Cleaned CSS written to ${outputFilePath}`);
      });
    });
  });
});
