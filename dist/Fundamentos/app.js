"use strict";
const fs = require('fs');
const data = fs.readFileSync('readme.md', 'utf8');
const newData = data.replace(/React/ig, 'Angular');
fs.writeFileSync('readme.md-Angular.md', newData);
//# sourceMappingURL=app.js.map