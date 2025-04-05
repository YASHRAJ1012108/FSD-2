    const EventEmitter = require('events');
    var ee = new EventEmitter();
    var listener1 = function listen1() {
        console.log("Listener1 executed");
    };
    var listener2 = function listen2() {
        console.log("Listener2 executed");
    };
    ee.on("conn",listener1) // addListener/on both functions perform same task. You can use
    // addListener or on to execute a task.
    ee.on("conn", listener2);
    //Count initially all the events.
    let count = ee.listenerCount("conn");
    console.log("Count 1: " + count );
    ee.emit("conn");
    //To remove 1st listner
    ee.removeListener('conn', listener1);
    count = ee.listenerCount("conn");
    console.log("Counting again: " + count );
    ee.emit("conn");
    // Above program ends here as per the question. Below is additional task of remove all
    // listeners. and count the listener.
    //To remove all listners
    ee.removeAllListeners('conn', listener1);
    count = ee.listenerCount("conn");
    console.log("Again Count afetr removing all listeners: " + count );
    ee.emit("conn");