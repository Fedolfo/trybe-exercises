const fs = require('fs');

function writeFileSync(arquivo, content) {
    fs.writeFileSync(arquivo, content)
      return('ok');
}
console.log(writeFileSync('meuarquivo.txt','sou o cara'));

module.exports = {
  writeFileSync,
};
