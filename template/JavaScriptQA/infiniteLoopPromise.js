const infiniteLoopPromise = (time) => {
    console.log('infiniteLoopPromise:', time);
    while (true); // infinite loop
}

setTimeout(() => infiniteLoopPromise(10000), 0);
setTimeout(() => infiniteLoopPromise(20000), 0);

// // expected Console result?