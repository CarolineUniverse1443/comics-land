// alert("Я JavaScript")
// let admin;
// let userName = "Джон";
// admin = userName;
// alert(admin);

// let userName = prompt("Ваше имя?");
// alert(`Ваше имя - ${userName}`);

// let scriptName = prompt("Какое 'официальное' название JavaScript?")

// if(scriptName == 'ECMAScript') alert("Верно!")
// else alert("Не знаете? ECMAScript!")

// let number = prompt("Введите число")
// if(number > 0) alert(1)
// else if(number < 0) alert(-1)
// else alert(0)

// let login;

// let message = (login == 'Сотрудник') ? 'Привет' :
// 		  (login == 'Директор') ? 'Здравствуйте' :
// 		  (login == '') ? 'Нет логина' : ''

// let age = 67;
// if (!(age >= 14 || age <= 90)) alert("Yes")
// if(age < 14 || age > 90) alert("Yes")

// let userName = prompt("Кто там?")

// if(userName == "Админ")
// {
// 	let password = prompt ("Пароль?");
// 	if (password === '' || password === null)
// 	{
// 		alert("Отменено")
// 	} 
// 	else
// 	{
// 		if(password == "Я главный" ) alert("Здравствуйте")
// 		else alert("Неверный пароль")
// 	}

// }
// else if (userName === '' || userName === null)
// {
// 	alert("Отменено")
// }
// else alert("Я вас не знаю")

//for (let i=2; i<=10; i+=2) alert(i);

// for (let i = 0; i < 3; i++) {
// 	alert( `number ${i}!` );
//   }

// let num = prompt("Введите число, большее 100");
// while(num<=100)
// {
// 	if(num<=100) num = prompt("Введите число, большее 100");
// 	else if(num>100 || num == null) break;
// }

// let n = 23;
// let isSimple = true;
// for (let i = 2; i <= n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if(i%j == 0)
// 		{
// 			isSimple = false;
// 			break; 
// 		}
// 		isSimple = true;
// 	}
// 	if(isSimple) alert(i);
// }

// let browser = prompt("Name of your browser")

// if(browser == 'Edge') alert("You've got the Edge!")
// else if (browser == 'Chrome' 
// || browser == 'Firefox' 
// || browser == 'Safari' 
// || browser == 'Opera')
// {
// 	alert("Okay we support these browsers too")
// }
// else alert("We hope that this page looks ok!")

// let age = prompt('Сколько вам лет?', 18);

// function checkAge(age) {
// 	// return age > 18 ? true : confirm('Родители разрешили?')
// 	return age > 18  || confirm('Родители разрешили?')
// 	// if (age > 18) {
// 	//   return true;
// 	// } else {
// 	//   return confirm('Родители разрешили?');
// 	// }
//   }

//   alert(checkAge(age))

// function min(a, b)
// {
// 	return (a < b) ? a : b
// }

// alert(min(3, -1))

// let x = prompt("Enter x");
// let n = prompt("Enter n");


// function pow(x, n)
// {
// 	if (n<1 || n%1 != 0) return "Enter integer number, greater than 0 ";
// 	let num = x;
// 	for(let i = 1; i < n; i++)
// 	{
// 		x *= num;
// 	}
// 	return x;
// }

// alert(pow(x,n));

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );

// let user = {
//     name: 'John',
//     surname: 'Smith',
// };

// user.name = 'Pete'

// delete user.name

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }

// let sum = 0;

// for(let salary in salaries)
// {
// 	sum += salaries[salary];
// }

// alert(sum);

// let menu = 
// {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };

// let showObject = function(object) 
// {
// 	for(let key in object)
// 	{
// 		alert(object[key]);
// 	}
// }
  
// let multiplyNumeric = function(object) 
// {
// 	for(let key in object)
// 	{
// 		if(typeof(object[key]) == 'number') object[key] *= 2;
// 	}
// };

// showObject(menu);
// multiplyNumeric(menu);	
// showObject(menu);

// function Calculator() 
// {
// 	this.read = function() 
// 	{
// 		let a = prompt("Введите первое число");
// 		let b = prompt("Введите второе число");
// 		this.a = a;
// 		this.b = b;
// 	};
// 	this.sum = function()
// 	{
// 		return +this.a + +this.b;
// 	};
// 	this.mul = function()
// 	{
// 		return this.a * this.b;
// 	};
// }

// let calculator = new Calculator();
// calculator.read();

// {
// 	read() 
// 	{
// 		let a = prompt("Введите первое число");
// 		let b = prompt("Введите второе число");
// 		this.a = a;
// 		this.b = b;
// 	},
// 	sum()
// 	{
// 		return +this.a + +this.b;
// 	},
// 	mul()
// 	{
// 		return this.a * this.b;
// 	}
// };
  
// function Accumulator(startingValue) 
// {
// 	this.value = startingValue
// 	this.read = function() 
// 	{
// 		let a = +prompt("Сколько нужно прибавить?");
// 		this.value += a;
// 	};
// 	this.sum = function()
// 	{
// 		return +this.a + +this.b;
// 	};
// 	this.mul = function()
// 	{
// 		return this.a * this.b;
// 	};
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// alert(accumulator.value)

let user = {name: "John"};

//alert(user); // [object Object]
alert(user.toString()); 