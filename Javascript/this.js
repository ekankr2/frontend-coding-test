// 브라우저 환경에서 실행

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

// 예상되는 결과값은?