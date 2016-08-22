var watcher;
var process = require('process');
if (process.platform === 'darwin') {
	watcher = require('./src/darwin.js');
} else {
	watcher = require('./src/win.js');
}
module.exports = watcher;