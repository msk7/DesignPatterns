
// Constructor

// IInterface
//
// Defines a helper method for mimicing typical Interfaces, adding a list of supported interfaces
// as metadata similar to reflection
// 
var Interface = function(name, methods) {
	if (arguments.length != 2) {
		throw new Error("Interface constructor called with "+arguments.length + "arguments , but expects exactly 2.");
	}
	this.name = name;
	this.methods = [];
	for (var i = 0, len = methods.length; i < len; i++)
	{
		if (typeof methods[i] !== 'string') 
		{
			throw new Error('Interface constructor expects method names to be passed in as a string.');
		}
		this.methods.push(methods[i]);
	}
};

// Static class method
//
// Verifies that the passed instance implements the requested interface methods
Interface.ensureImplements = function(object)
{
	if (arguments.length < 2)
	{
		throw new Error("Function Interface.ensureImplements called with" +
			arguments.length + "arguments, but expected at least 2.");
	}

	for (var i = 1, len = arguments.length; i < len; i++)
	{
		var interface = arguments[i];
		if (interface.constructor !== Interface)
		{
			throw new Error("Function Interface.ensureImplements expects arguments" +
			"two and above to be instances of Interface.");
		}

		for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++)
		{
			var method = interface.methods[j];
			if (!object[method] || typeof object[method] !== 'function')
			{
				throw new Error("Function Interface.ensureImplements: object " +
					"does not implement the "+interface.name + "interface. Method "+method+ " was not found.");
			}		
		}
	}
};

// Extend function 
function Extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.superclass = superClass.prototype;
	if (superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}

// Exports
module.exports.Interface = Interface;
module.exports.Extend = Extend;
