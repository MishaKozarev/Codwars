// The purpose of this kata is to implement the undoRedo function.

// This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

// set(key, value) Assigns the value to the key. If the key does not exist, creates it.

// get(key) Returns the value associated to the key.

// del(key) removes the key from the object.

// undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

// redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

// After set() or del() are called, there is nothing to redo.

// All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

// Any set/del after an undo should disallow new redos.

function undoRedo(obj) {
  let u = [];
  let r = [];
  function set(k, v) {
    r = [], u.push(k in obj ? [k, obj[k]] : [k]);
    if (arguments.length > 1) obj[k] = v;
    else delete obj[k];
  }
  function undo(u, r, a) {
    if (a = u.pop()) {
      r.push(a[0] in obj ? [a[0], obj[a[0]]] : [a[0]]);
      if (a.length == 1) delete obj[a[0]];
      else obj[a[0]] = a[1];
    }
    return a;
  }
	return {
		set: function(k, v) { set(k, v); },
		get: function(k) { return obj[k]; },
		del: function(k) { set(k); },
		undo: function() { if (!undo(u, r)) throw "Nothing to undo"; },
		redo: function() { if (!undo(r, u)) throw "Nothing to redo"; }
	};
}