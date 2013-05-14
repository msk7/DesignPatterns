
// DataStructures Namespace
var dataStructures = {

    // Implements a Stack using a Javascript Array()
    stack : function() {                  
        var elements;
        
        // Pushes item into stack
        this.push = function(element) {
            if (typeof(elements) === 'undefined') {
                elements = [];   
            }                            
            elements.push(element);
        };

        // Pops item off stack
        this.pop = function() {
            return elements.pop();
        };

        // Returns item at top of stack (without removing)
        this.stackTop = function(element) {
            return elements[elements.length - 1];
        };

        // Return true if stack is empty
        this.isEmpty = function() {
            return (typeof(elements) === 'undefined') || (elements.length == 0);
        };

        // Constructor code
        return this;
    }
}

// Exports
module.exports = dataStructures;