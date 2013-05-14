
var OOPHelper = require('./OOPHelper.js');

// IIterator Inteface
var IIterator = new OOPHelper.Interface('IIterator', 
		['Reset',		// Resets the iterator back to the beginning of the collection
		 'Next',		// Gets the item in the collection
		 'HasNext' 		// Checks if there are remaining items in the colleciton
		]);

// Exports
module.exports = IIterator;