// @target: es5

function one({}, {foo, bar}) {
  // ...
}

function two([]) {}

function three({} = {}) {}

function four([] = []) {}

// should be an error
one(undefined, { foo: 'foo', bar: 'bar' });  

one(null,  { foo: 'foo', bar: 'bar' });

two(undefined);

two(null);

// should not be an error

three(undefined);

three(null);

four(undefined);

four(null)