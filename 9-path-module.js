const path = require('path')

console.log(path.sep);

// for joining path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// gives the base folder
const base = path.basename(filePath)
console.log(base);


// gives the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);