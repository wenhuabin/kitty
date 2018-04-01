var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.setMaxListeners(10); //针对某个时间的回调函数个数，比如 'message'

emitter.on('someEvent', function () {
    console.log('event has occured');
});


emitter.on("newListener", function (evtName) {
    console.log("New Listener: " + evtName);
});

emitter.on("removeListener", function (evtName) {
    console.log("Removed Listener: " + evtName);
});

function f() {
    console.log('start');
    emitter.emit('someEvent'); //这里是同步的，执行完 dispatch 再执行后一条 console.log
    console.log('end');


    emitter.once('message', function(msg){
        console.log('message: ' + msg);
    });
    
    emitter.emit('message', 'this is the first message');
    emitter.emit('message', 'this is the second message');
    emitter.emit('message', 'welcome to nodejs');

    console.log(emitter.listeners("someEvent"));

    setTimeout(function(){
        emitter.emit('rmessage', 'foo bar');
    }, 300);
    
    setTimeout(function(){
        emitter.removeListener('rmessage', console.log);
    }, 1000);

    emitter.on('beep', function () {
        throw Error('oops!');
    });
    
    emitter.on('beep', function () {
        console.log('beep again');
    });
    
    console.log('before emit');
    
    try {
        emitter.emit('beep');
    } catch(err) {
        console.error('caught while emitting:', err.message);
    }
    
}

f()

//output
//start
//event has occured
//end
