var StorageDeviceAbstract = require('./StorageDeviceAbstract.js');
var OOPHelper = require('./OOPHelper.js');

// Implements a Flash Drive StorageDevice as a subclass of StorageDriveAbstract
//
function FlashDrive(capacity) {
	FlashDrive.superclass.constructor.call(this, capacity);	

	// Public (Privileged) methods
	this.GetType = function() {
		return "FlashDrive";
	}
}

// Subclass StorageDeviceAbstract
OOPHelper.Extend(FlashDrive, StorageDeviceAbstract);

FlashDrive.prototype.toString = function() {
	return "["+this.GetType()+": Capacity: "+this.GetCapacity()+"]";
}

// Exports
module.exports = FlashDrive;