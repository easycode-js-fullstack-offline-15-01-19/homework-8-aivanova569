// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// ----------------- This. Контекст вызова функции ---------------
/* 1. Создать объект, который описывает ширину и высоту прямоугольника,
а также может посчитать площадь фигуры
*/
const rectangle = {
    width: 10,
    height: 7,
    getSquare: function() {
        return (this.width * this.height);
    }
};

/*  2. Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки
*/
const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price * ( 100 - parseFloat(this.discount) ) / 100;
    }
};

/* 3. Создать объект, у которого будет поле высота и метод “увеличить высоту
на один”. Метод должен возвращать новую высоту
*/
const object = {
    height: 10,
    getNewHeigt: function() {
        return this.height + 1;
    }
};

/* 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” 
и методы “удвоить”, “прибавить один”, “отнять один”.
*/
const numerator = {
    value: 1,
    double: function () {
        return this.value * 2;
    },
    plusOne: function () {
        return this.value + 1;
    },
    minusOne: function () {
        return this.value - 1;
    },
};

/* 5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен
содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
*/
const products = {
    price: 120,
    amount: 5,
    getTotalPriceProduct: function() {
        return this.price * this.amount;
    } 
};

/* 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает 
количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую 
стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.
*/
const detalies = {
    price: 20,
    amount: 40
};

const getTotalPriceDetalies = products.getTotalPriceProduct.bind(detalies);

/* 7. Даны объект и функция: let sizes = {width: 5, height: 10}, 
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes
*/
let sizes = {
    width: 5,
    height: 10,
};

getSquare = function() {
    return this.width * this.height;
};

let result = getSquare.call(sizes);

/* 8. let element = {
        height: 25,
        getHeight: function () {return this.height;}
      };

let getElementHeight = element.getHeight;
getElementHeight(); // undefined
Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
*/
let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);

// ---------------------------------- Замыкания ------------------------------------
/* 1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus()(6); // -6
*/
function minus(a) {
    return function (b) {
        return a - b;
    }
}

/* 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами
*/
function multiplyMaker(x) {
    return function(y) {
        return x *= y;
    }
}

const multiply = multiplyMaker(2);

/* 3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
*/
const moduleStr = {
    str: '',
    setStr: function(newStr) {
        if(!newStr) {
            str = '';
        } else if(typeof(newStr) === 'number') {
            str = newStr + '';
        } else {
            str = newStr;
        }
        return str;
    },

    getStr: function() { return str; },

    getStrLength: function() { return str.length; },

    getReverseStr: function() {
        return str.split("").reverse().join("");
    }
};

/* 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, 
делить и возводить в степень. Конечное значение округлить до двух знаков после точки 
(значение должно храниться в обычной переменной, не в this).
*/
const calc = {
    numb: 0,
    setNumb: function(newNumb) {
        if(!newNumb) {
            numb = 0;
        } else if(typeof(newNumb) !== 'number') {
            alert('Введите число!');
        } else {
            numb = newNumb;
        }
        return calc;
    },

    numbPlus: function(plus) {
        numb += plus;
        return calc;
    },
  
    numbMinus: function(minus) {
        numb -= minus;
        return calc;
    },

    numbMultiply: function(mult) {
        numb *= mult;
        return calc;
    },

    numbSplit: function(split) {
        numb /= split;
        return calc;
    },

    numbDegree: function(deg) {
        numb = Math.pow(numb, deg);
        return calc;
    },

    getNumb: function() {
        numb = parseFloat(numb.toFixed(2));
        console.log(numb);
        return calc;
    }
};
