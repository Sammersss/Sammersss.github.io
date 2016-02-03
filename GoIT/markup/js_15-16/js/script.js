function GoogleCallback (func, data) {
    var searchResult = $('#results').html();
    var content = tmpl(searchResult, data);
    $('.results').html('').append(content);

}

$(function () {
    $('.search').submit(function(){
        var valueInput = encodeURIComponent($('.search__input').val());
        var query = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ valueInput + '&callback=GoogleCallback&context=?';
           
        $.ajax({
            url: query,
            dataType : "jsonp"
       	});
       	return false;
    });
});
 



// ==================__PROTO__==================
function Human() {
	this.name = 'Alex';
	this.age = 29;
	this.gender = 'male';
	this.weight = 70;
}

function Worker() {
    this.job = 'private company';
    this.money = 30000
    this.work = function () {
        console.log(newWorker.name,'! it is 7 AM already - go to work!');
    }
}
Worker.prototype =  new Human();

var newWorker = new Worker();
console.log('newWorker:', newWorker);
console.log(newWorker.name +' age:', newWorker.age);
newWorker.work();


console.log('============================');

function Student() {
    this.name = 'Igor';
    this.age = 19;
    this.university = 'NAU';
    this.grants = 600
    this.watchFilms = function () {
        console.log(newStudent.name,'! it is 10 AM already - let`s watch the films!');
    }
}
Student.prototype =  new Human();

var newStudent = new Student();
console.log('newStudent:', newStudent);
console.log(newStudent.name +' weight:', newStudent.weight);
newStudent.watchFilms();