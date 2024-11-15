// Q1 変数
let nickname = 'ごっしー'
let age = 28

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。')


// Q2 配列
let languages = ['javaScript', 'PHP', 'Ruby', 'Python', 'Go']

console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。')


// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age)

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1])

// Q5 四則演算
let sumAge = playerList[0].age + playerList[1].age + playerList[2].age
let aveAge = sumAge / 3

console.log(aveAge)

// Q6 関数
function sayHello() {
  console.log('Hello')
}

sayHello()

let sayWorld = () => {
  console.log('World')
}

sayWorld()

// Q7 メソッド
user.birthday = '2000-09-27'
user.sayHello = () => {
  console.log('Hello！')
}

user.sayHello()

// Q8 引数
let calc = {}

calc.add = (x, y) => {
  let sum = x + y
  console.log(sum)
}
calc.add(3, 4)

calc.subtract = (x, y) => {
  let diff = x - y
  console.log(diff)
}
calc.subtract(15, 5)

calc.multiply = (x, y) => {
  let product = x * y
  console.log(product)
}
calc.multiply(7, 7)

calc.divide = (x, y) => {
  let quotient = x / y
  console.log(quotient)
}
calc.divide(15, 3)

// Q9 返り値
function remainder(x, y) {
  return x % y
}
x = 5
y = 3
const result = remainder(x, y)
console.log(x + 'を' + y + 'で割った余りは' + result + 'です。')


// Q10

//foo関数内で定義されているx変数をスコープ外である関数の外で参照しようしているため。


//応用問題
// Q1 標準組み込みオブジェクト
for (let i = 0; i <= 9; i++) {
  let random = Math.floor((Math.random() * 9))
  console.log(random)
}

// Q2 コールバック関数
let setTime = function () {
  console.log('Hello World')
}
setTimeout(setTime, 3000)


// Q3 if
let num = 80

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num == 0) {
  console.log('num is 0');
}

// Q4 for
let numbers = []

for (i = 0; i <= 99; i++) {
  numbers.push(i)
}
console.log(numbers)

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'string') {
    console.log('not number')
  } else if (mixed[i] % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}
