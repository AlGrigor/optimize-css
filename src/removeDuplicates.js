// src/removeDuplicates.js

// Функция для удаления дублирующихся CSS блоков стилей
function removeDuplicateCSS(content) {
const blocks = content.split(/\}\s*/); // Разделяем содержимое на блоки стилей
const uniqueBlocks = new Set();

const result = blocks.reduce((acc, block) => {
  // Удаляем комментарии из блока
  const cleanedBlock = block.replace(/\/\*[\s\S]*?\*\//g, '');

  // Добавляем блок в результат, если он уникален
  if (!uniqueBlocks.has(cleanedBlock)) {
    uniqueBlocks.add(cleanedBlock);
    acc.push(block);
  }

  return acc;
}, []);

return result.join('}\n').trim(); // Собираем результат обратно в строку
}

module.exports = removeDuplicateCSS;
