var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('someEvent', function () {
  console.log('event has occured');
});

function f() {
  console.log('start');
  emitter.emit('someEvent');
  console.log('end');
}

f()

//output
//start
//event has occured
//end
