var path = require('path');
var runPlatform = require('system-platform/run.js');
var runTest = require('system-test/run.js');

function run(filePath){
	if( filePath.indexOf('/test/') > -1 ){
		runTest(filePath);
	}
	else{
		runPlatform(filePath);
	}

}
module.exports = run;