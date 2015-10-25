//var path = require('path');

function run(filePath){
	filePath = filePath.replace(/\\/g, '/');

	if( filePath.indexOf('/test/') > -1 ){
		console.log('test', filePath);
		require('system-test/bin/run');
	}
	else{
		console.log('platform', filePath);
		require('system-platform/bin/run');
	}
}

module.exports = run;