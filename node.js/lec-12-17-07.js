// setTimeout(() =>{
//     console.log("This is set Timeout");
// });

// setImmediate(() =>{
//     console.log("This is set immediate");
// });

//Node js Event Emitter
// in backend if event handling is done then it is known as event emitter

// const EventEmitter = require('node:events'); 
// const eventEmitter = new EventEmitter();     

// eventEmitter.on('start', () => {
//     console.log('started');
// });

// eventEmitter.emit('start'); // this will now trigger the listener



//emit is used to trigger an event
// on is used to add a callback function 

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

// 1. Regular listener
const onStart = () => {
  console.log('started');
};
eventEmitter.on('start', onStart);

eventEmitter.once('start', () => {
  console.log('started ONCE');
});

eventEmitter.emit('start'); 
console.log('--- First emit done ---');

eventEmitter.emit('start'); 
console.log('--- Second emit done ---');

eventEmitter.removeListener('start', onStart);

eventEmitter.emit('start');
console.log('--- Third emit (after removeListener) ---');

eventEmitter.on('start', () => console.log('Listener A'));
eventEmitter.on('start', () => console.log('Listener B'));


eventEmitter.removeAllListeners('start');

eventEmitter.emit('start'); 
console.log('--- Fourth emit (after removeAllListeners) ---');