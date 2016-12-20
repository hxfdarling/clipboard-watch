# clipboard-watch

This is height performance clipboard watcher,use C++ code in windows system,use system API in osx system
1. support windows,osx
2. High-performance
3. support nodejs(>=0.10),nwjs,electron

## Install
Before install ,you should confire you you installed python,Visual Studio(Windows),Xcode(osx) and node-gyp,because of depend on node-ffi,nodebjc(need rebuild)
```
npm i clipboard-watch --save
```
## Example
```js
var cw = require('clipboard-watch');
//start watcher clipboard change
cw.watcher(function(){
	//you can get clipboard data by NWjs API or Electron API
	console.log('change');
});
//end watcher clipboard change
cw.unwatcher();
```
## License
Copyright © 2016 zman <hxfdarling@hotmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
