var OOPHelper = require('./OOPHelper.js');
var IStorageDevice = require('./IStorageDevice.js');
var IFileSystemEntry = require('./IFileSystemEntry.js')
var FileSystem = require('./FileSystem.js');

// Abstract implementation of IStorageDevice
//
function StorageDeviceAbstract(newCapacity) {	// Implements IStorageDevice
	// Private Variables
	var _capacity;
	var _fileSystem;
	
	// Private static properties
	function ThrowAbstractInstantionError()
	{
		throw new Error("StorageDeviceAbstract can't be instantiated as its Abstract.");
	}

	// Private static methods
	function setCapacity(newCapacity) {
		_capacity = newCapacity;
	};

	// Public (Privileged) methods
	this.GetType = function() {
		ThrowAbstractInstantionError();
	}

	this.GetCapacity = function() {
		return _capacity;
	}

	this.GetIsReadOnly = function() {
		ThrowAbstractInstantionError();
	}

	this.GetRoot = function() {
		if (!_fileSystem) {
			_fileSystem = new FileSystem.FolderEntry('.');
			OOPHelper.Interface.ensureImplements(_fileSystem, IFileSystemEntry);
		}
		return _fileSystem;
	}

	// Constructor code
	_capacity = newCapacity;
};

// Force sub-classes to override toString
StorageDeviceAbstract.prototype.toString = function() {
	ThrowAbstractInstantionError();
}

// Exports
module.exports = StorageDeviceAbstract;