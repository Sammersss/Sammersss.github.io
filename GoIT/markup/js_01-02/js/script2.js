var arr = [];

for (var i = 5; i > 0; i--) {
	while (true) {
	arr[i] =  prompt('Введите имя п`яти пользователей (осталось ввести ' + i + '):');
	var flag = (arr[i] != null) && (arr[i] != '') && (arr[i] != ' ');
	if  ( flag ) {
		break;
	}else {
	alert ('Введите правильное им`я!!!');
	}
	}
}

console.log(arr);

var userName = prompt('Введите свое имя');
var flag = false;


for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName){
		flag = true;
		console.log(userName,', Вы успешно вошли!');
		break;
	} 
}
if (flag){
	alert(userName + ', Вы успешно вошли!')
}else{
	alert('Ошибка ! Такого пользователя не существует!!!')
	
}