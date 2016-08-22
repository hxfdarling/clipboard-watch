var ffi = require('ffi');
var path = require('path');
var funPtr = ffi.Function('void', ['int']);
var dll
if (require('os').arch() == 'x64') {
	dll = path.join(__dirname, '../lib/watcher-x64.dll');
} else {
	dll = path.join(__dirname, '../lib/watcher-ia32.dll');
}

var lib = ffi.Library(dll, {
	watcher: ['void', [funPtr, 'int']],
	unwatcher: ['void', []]
});
var callback;
var proc = ffi.Callback('void', ['int'], function(count) {
	if (typeof callback === 'function') {
		callback(count);
	}
})
module.exports = {
	watcher: function(cb) {
		callback = cb;
		lib.watcher(proc, 10);
	},
	unwatcher: function() {
		lib.unwatcher();
	}
}