// Has to run on browser because of "window"

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