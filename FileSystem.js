var IFileSystemEntry = require('./IFileSystemEntry.js');
var IIterator = require('./IIterator.js');
var DataStructures = require('./DataStructures.js');

// Implements a directory node for storing information about a single file
//
var FileEntry = function(newName, newSize) {	// Implements IFileSystemEntry
		
	// Private Variables
	var _name;
	var _size;

	// Private static properties

	// Private static methods
	function setName(newName) {
		_name = newName;
	};

	function setSize(newSize) {
		_size = newSize;
	};

	// Public (Privileged) methods
	this.GetName = function() {
		return _name;
	};

	this.GetSize = function() {
		return _size;
	};

	this.GetChildren = function() {
		// Does not support children
	};

	this.Add = function(newEntry) {
		throw new Error('FileEntry does not accept children');
		// Does not support children	
	};

	this.Remove = function(entry) {
		throw new Error('FileEntry does not accept children');
		// Does not support children
	};		

	this.GetDirectory = function(indentLevel, callback) {
		//console.log(new Array(indentLevel+1).join(" ")+this.GetName());
		callback(new Array(indentLevel*2+1).join(" ")+this.GetName());
	};

	// Constructor code
	setName(newName);
	setSize(newSize);
};

FileEntry.prototype.toString = function() {
	return "Name: "+this.GetName()+" Size: "+this.GetSize();
}

// Implements a directory node for storing information about a subdirectory
//
var FolderEntry = function(newName) {	// Implements IFileSystemEntry, IIterator

	// Private Fields
	var _name;
	var _children = Array();
	var _iteratorStack = undefined;

	// Private static properties

	// Private static methods
	function setName(newName) {
		_name = newName;
	};

	// Public (Privileged) methods

	this.GetName = function() {
		return _name;
	};

	this.GetSize = function() {
		var size = 0;
		for (i = 0; i < _children.length; i++) {
			size += _children[i].GetSize();
		}
		return size;
	};

	this.GetChildren = function() {
		return _children;
	};

	this.Add = function(newEntry) {
		_children.push(newEntry);
		return newEntry;
	};

	this.Remove = function(entry) {
		// Does not support children
	};	

	this.GetDirectory = function(indentLevel, callback) {
		callback(new Array(indentLevel*2+1).join(" ")+this.GetName()+ " \\");
		//console.log(new Array(indentLevel+1).join(" ")+this.GetName()+ " \\");
		indentLevel++;
		for (var i = 0; i < _children.length; i++) {
			//_children[i].GetDirectory(indentLevel);
			_children[i].GetDirectory(indentLevel, callback);				
		}
	};

	// IIterator Implementation
	//

	// Resets the iterator
	this.Reset = function() {
		_iteratorStack = new DataStructures.stack();
		_iteratorStack.push(this)
	};

	// Gets the next entry 
	this.Next = function() {
		if (!this.HasNext()) {
			throw new Error("Iteration at end");
		}

		var nextEntry = _iteratorStack.pop();
		var children = nextEntry.GetChildren();
		if (typeof(children) !== 'undefined') {
			for (var i = children.length-1; i >= 0; i--)
			{
				_iteratorStack.push(children[i]);
			}
		}
		return nextEntry;
	};

	// Return true if there are more elements to iterate
	this.HasNext = function() {
	 	return !_iteratorStack.isEmpty();
	}

	// Constructor code
	setName(newName);
};

FolderEntry.prototype.toString = function() {
	return "Name: "+this.GetName()+" Size: "+this.GetSize()+" # Direct Children: "+this.GetChildren().length;
}

// Exports
module.exports.FolderEntry = FolderEntry;
module.exports.FileEntry = FileEntry;