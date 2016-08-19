var nodobjc = require("nodobjc");
nodobjc.framework("AppKit");
var pool = nodobjc.NSAutoreleasePool("alloc")("init");

function getClipboardCount() {
	var pasteboard = nodobjc.NSPasteboard("generalPasteboard");
	return pasteboard("changeCount")
}
exports.startWatcher = function(callback) {
	var count;
	setInterval(function() {
		var curCount = getClipboardCount();
		count || (count = curCount), count !== curCount && (count = curCount, callback())
	}, 250)
};