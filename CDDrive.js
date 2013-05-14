var StorageDeviceAbstract = require('./StorageDeviceAbstract.js');
var OOPHelper = require('./OOPHelper.js');

// Implements a CD Drive StorageDevice as a subclass of StorageDriveAbstract
//
function CDDrive(capacity) {

	var _IsFinalized = false;

	CDDrive.superclass.constructor.call(this, capacity);	

	// Public (Privileged) methods
	this.GetType = function() {
		return "CD";
	}

	this.GetIsReadOnly = function() {
		return this._isFinalized;
	}
}

// Subclass StorageDeviceAbstract
OOPHelper.Extend(CDDrive, StorageDeviceAbstract);

CDDrive.prototype.toString = function() {
	return "["+this.GetType()+": Capacity: "+this.GetCapacity()+"]";
}

// Exports
module.exports = CDDrive;