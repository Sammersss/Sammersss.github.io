var arr = [];

for (var i = 5; i > 0; i--) {
	arr[i] =  prompt('Введите имя п`яти пользователей (еще ' + i + '):');
}

console.log(arr);

var userName = prompt('Введите свое имя');
var flag = false;


for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName){
		flag = true;
		break;
//		console.log(userName);
	} 
}
if (flag){
	alert(userName + ', вы успешно вошли!')
}else{
	alert('Ошибка ! Такого пользователя не существует!!!')
	
}