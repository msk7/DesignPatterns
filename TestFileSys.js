
var FileSystem = require('./FileSystem.js');
var OOPHelper = require('./OOPHelper.js');
var IFileSystemEntry = require('./IFileSystemEntry.js')
var StorageDeviceFactory = require('./StorageDeviceFactory');

console.log("IS 683, Spring 2013, Professor Willaims");
console.log("Scott Kellish");
console.log("Design Patterns Homework");
console.log();

// Create a 1GB HardDrive device
console.log("Creating 1GB HardDrive device from factory...");
var hardDrive = StorageDeviceFactory.createStorageDevice('HardDrive', 1024*1024*1024);
console.log(hardDrive.toString());
console.log();

// Add folders and files
console.log("Adding folders/files to HardDrive filesystem...");
console.log();
for (folderIdx = 1; folderIdx < 3; folderIdx++) {
	var folder = hardDrive.GetRoot().Add(new FileSystem.FolderEntry('Folder-'+folderIdx));
	for (fileIdx = 1; fileIdx < 5; fileIdx++) {
		folder.Add(new FileSystem.FileEntry('File-'+fileIdx+".txt", fileIdx*1000));
	}
}

// Traverse & Display directory using callback 
console.log("Traversing HardDrive filesystem using GetDirectory({callback()})");
console.log();
hardDrive.GetRoot().GetDirectory(0, function(entry) {
	console.log(entry);
});
console.log();

// Traverse and dislay using iterator
console.log("Traversing HardDrive filesystem using filesystem IIterator...");
console.log();
hardDrive.GetRoot().Reset();
while (hardDrive.GetRoot().HasNext())
{
	console.log(hardDrive.GetRoot().Next().toString());
}
console.log();

// Create a 1MB Flash Drive drive 
console.log("Creating 1MB FlashDrive device from factory...");
var usb = StorageDeviceFactory.createStorageDevice("FlashDrive", 1024*1024);
console.log(usb.toString());
console.log();

// Add a deep directory to the device
console.log("Creating deep filesystem on FlashDrive...");
var  parent = usb.GetRoot();
for (i = 1; i < 10; i++) {
	parent = parent.Add(new FileSystem.FolderEntry('0'+i));
}
console.log();

// Add a file
parent.Add(new FileSystem.FileEntry('index.html', 1024));

// Traverse & Display directory using callback 
console.log("Traversing FlashDrive filesystem using GetDirectory({callback()})");
console.log();
usb.GetRoot().GetDirectory(0, function(entry) {
	console.log(entry);
});

