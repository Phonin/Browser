const fs = require('fs-extra');

// copies defaultBuild to build
fs.copySync('./defaultBuild', './build');
