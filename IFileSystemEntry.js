
var OOPHelper = require('./OOPHelper.js');

// IFileSystemEntry
//
var IFileSystemEntry = new OOPHelper.Interface('IFileSystemEntry', 
	[	'Add',			// Allows adding an item to the filesystem (e.g., file or folder)
		'Remove',		// Allows removing an item from the filesystem
		'GetName',		// Returns the name of the current item
		'GetSize',		// Returns the size of the current item
		'GetChildren',	// Returns the current item's children
		'GetDirectory'	// Traverses the items children invoking a callback on each node
	]);

// Exports
module.exports = IFileSystemEntry;