# clipboard-watch

1.support windows,osx

2.High-performance

# install
    
    npm install clipboard-watch --save

# example

    var cw = require('clipboard-watch');
	//start watcher clipboard change
    cw.watcher(function(){
      console.log('change');
    });
	//end watcher clipboard change
	cw.unwatcher();
    
    
