var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.once('sooraj',function(){
	console.log('sooraj is budduse');
});

var x = function(){
	console.log('jitendar is a stupid');
	emitter.removeListener('jitendar',x);
}
emitter.on('jitendar',x);

emitter.on('ganesh',function(){
	console.log('ganesh is a mad boy')
});

emitter.on('brindaban',function(){
	console.log('hey!!! protect your hens brindaban is comming.... hurry up.')
});

emitter.emit('sooraj');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('brindaban');
emitter.emit('sooraj');
emitter.emit('ganesh');
emitter.emit('sooraj');