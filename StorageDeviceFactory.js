var OOPHelper = require('./OOPHelper.js');
var IStorageDevice = require('./IStorageDevice.js')
var HardDrive = require('./HardDrive.js');
var FlashDrive = require('./FlashDrive.js');
var CDDrive = require('./CDDrive.js');

// Implements Factory Pattern as a Singleton to create different types of storage devices 
var StorageDeviceFactory = {
	createStorageDevice: function(type, capacity) {

		var _storageDevice;

		switch (type.toLowerCase()) {
			case 'flashdrive':
				_storageDevice = new FlashDrive(capacity);
				break;
			case 'harddrive':
				_storageDevice = new HardDrive(capacity);
				break;
			case 'cd':
				_storageDevice = new CDDrive(capacity);
				break;
			default:
				throw new Error("Unknown StorageDevice type");
		}

		// Make sure created device implements the IStoreageDevice interface
		OOPHelper.Interface.ensureImplements(_storageDevice, IStorageDevice);
		return _storageDevice;				
	}
};

// Exports
module.exports = StorageDeviceFactory;
