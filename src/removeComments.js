// src/removeComments.js

// Функция для удаления комментариев внутри блоков { /* ... */ }
function removeComments(content) {
    return content.replace(/\/\*[\s\S]*?\*\//g, match => {
      return match.replace(/\/\*|\*\//g, ''); // Удаляем символы /* и */
    });
  }
  
  module.exports = removeComments;
  