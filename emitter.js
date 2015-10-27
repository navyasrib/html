var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.once('sooraj',function(){
	console.log('sooraj is budduse');
});

var x = function(){
	console.log('jitendar is a stupid');
	emitter.removeListener('jitendar',x);
};
emitter.on('jitendar',x);

emitter.on('ganesh',function(){
	console.log('ganesh is a mad boy')
});

emitter.on('brindaban',function(a,b,c){
	console.log('hey!!! protect your',a,b,c,'hens brindaban is comming.... hurry up.')
});

var ola = function(){
	console.log('this is removed listener');
};
emitter.on('ola',ola);
emitter.removeListener('ola',ola);

var addition = function(num1,num2){
	console.log('sum of',num1,num2,'is',num1+num2);
};
emitter.on('sum',addition);

emitter.emit('sum',5,3);
emitter.emit('sooraj');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('jitendar');
emitter.emit('brindaban',2,3,4);
emitter.emit('sooraj');
emitter.emit('ganesh');
emitter.emit('sooraj');
emitter.emit('ola');