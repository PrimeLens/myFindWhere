
// node module


/*
	my light weight findWhere with same args as underscore
	uses standard for loop iterating backwards
	currently only checks one property in its test
	
	reference for Object.keys(myObj)
	http://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
*/


module.exports = function( myArr,  myObj){

	var finalAnswer = null;

	// the property in question
	var prop = Object.keys(myObj)[0]; 
	var testVal = myObj[ prop ];
	
	// backwards iteration for loop	
	var len = myArr.length;
	for (var i = len-1; i >=0 ; i--) {
		if( myArr[i][prop] == testVal ) {
			finalAnswer = myArr[i];
			break;
		}
	}
	return finalAnswer;
}