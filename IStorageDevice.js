
var OOPHelper = require('./OOPHelper.js');

// IStorageDevice Interface
var IStorageDevice = new OOPHelper.Interface('IStorageDevice', 
	['GetType',			// Returns the type of device
	 'GetCapacity',		// Returns the device capacity
	 'GetIsReadOnly',	// Returns true if device is readyonly
	 'GetRoot'			// Returns the root of the devices filesystem (of type IFileSystemEntry)
	]);

// Exports
module.exports = IStorageDevice;