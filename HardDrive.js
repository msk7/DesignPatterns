var StorageDeviceAbstract = require('./StorageDeviceAbstract.js');
var OOPHelper = require('./OOPHelper.js');

// Implements a Hard Drive StorageDevice as a subclass of StorageDriveAbstract
//
function HardDrive(capacity) {
	HardDrive.superclass.constructor.call(this, capacity);	

	// Public (Privileged) methods
	this.GetType = function() {
		return "HardDrive";
	}
}

// Subclass StorageDeviceAbstract
OOPHelper.Extend(HardDrive, StorageDeviceAbstract);

HardDrive.prototype.toString = function() {
	return "["+this.GetType()+": Capacity: "+this.GetCapacity()+"]";
}

// Exports
module.exports = HardDrive;