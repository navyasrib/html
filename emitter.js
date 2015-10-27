var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('sooraj',function(){
	console.log('sooraj is budduse');
});

emitter.on('jitendar',function(){
	console.log('jitendar is a stupid');
});

emitter.on('ganesh',function(){
	console.log('ganesh is a mad boy')
});

emitter.on('brindaban',function(){
	console.log('keep your hens safely brindaban is comming.... hurry up.')
})

emitter.emit('sooraj');
emitter.emit('jitendar');
emitter.emit('brindaban');
emitter.emit('sooraj');
emitter.emit('ganesh');
emitter.emit('sooraj');