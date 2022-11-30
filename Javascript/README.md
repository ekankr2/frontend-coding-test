
### promise 

```javascript
const print = () => {
    console.log(1)
    setTimeout(() => console.log(2), 0)
    console.log(3)
}

print()
// expected result?
```


### promise

```javascript
const infiniteLoopPromise = (time) => {
    console.log('infiniteLoopPromise:', time);
    while (true); // infinite loop
}

setTimeout(() => infiniteLoopPromise(10000), 0);
setTimeout(() => infiniteLoopPromise(20000), 0);

// // expected Console result?
```

### let, const

```javascript
let letObject = {
    name: 'Kim',
    age: 14
}

const constObject = {
    name: 'John',
    age: 12
}

letObject.name = 'Park'
letObject.age = 20
constObject.name = 'Park'
constObject.age = 20



console.log(letObject)
console.log(constObject)

// expected console result?
```


### this syntax 

```JavaScript
var obj = {
    name: 'B',
    print: function () {
        var inner1 = function () {console.log(this.name, name)};
        inner1();

        var inner2 = () => console.log(this.name, name);
        inner2();

        var name = 'C';
        console.log(window.name, this.name, name);
    }
}

name = 'A';
obj.print();

// expected result?
```