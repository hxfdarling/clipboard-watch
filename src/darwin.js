var nodobjc = require("nodobjc");
nodobjc.framework("AppKit");
var pool = nodobjc.NSAutoreleasePool("alloc")("init");

function getClipboardCount() {
	var pasteboard = nodobjc.NSPasteboard("generalPasteboard");
	return pasteboard("changeCount")
}
var intervalTime = 0;
module.exports = {
	watcher: function(callback) {
		var count;
		intervalTime = setInterval(function() {
			var curCount = getClipboardCount();
			count || (count = curCount), count !== curCount && (count = curCount, callback())
		}, 250)
	},
	unwatcher: function() {
		clearInterval(intervalTime);
	}
}