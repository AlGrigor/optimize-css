// src/removeDuplicates.js

// Функция для удаления дублирующихся CSS правил
function removeDuplicateCSS(content) {
  const lines = content.split('\n');
  const result = [];
  const uniqueBlocks = {};

  let selector = '';
  let cssBlock = [];

  lines.forEach(line => {
    const trimmedLine = line.trim();

    if (trimmedLine.endsWith('{')) {
      selector = trimmedLine;
      cssBlock = [];
    }

    if (selector) {
      cssBlock.push(line);

      if (trimmedLine.endsWith('}')) {
        const blockString = cssBlock.map(l => l.trim()).join('');

        // Проверяем, был ли блок CSS уже добавлен
        if (!uniqueBlocks[blockString]) {
          uniqueBlocks[blockString] = true;
          result.push(...cssBlock);
        }

        selector = '';
        cssBlock = [];
      }
    } else if (trimmedLine) {
      result.push(line);
    }
  });

  return result.join('\n');
}

module.exports = removeDuplicateCSS;
