var crypto = require('crypto');
var name = 'braitsch';
var hash = crypto.createHash('md5').update(name).digest('hex');
console.log(hash);
