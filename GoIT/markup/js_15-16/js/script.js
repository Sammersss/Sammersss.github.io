function GoogleCallback(func, data) {
    window[func](data);
}

$(function() {

    $('.search').submit(function(e) {
        e.preventDefault();
        $ajaxSearch(0);
    });
	
    var $ajaxSearch = function(p) {
        var $inputText = $('.search__input');
        var $body = $('body');

        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=' + p * 8 + '&q=' + encodeURIComponent($inputText.val()) + '&callback=GoogleCallback&context=?',
            dataType: "jsonp",
            success: function(data) {
				
				var result = document.createElement('div');
				result.classList.add('result');
				var ul = document.createElement('ul');

				var page_nav = document.createElement('div');
				page_nav.classList.add('page_nav');
				var page_nav_list = document.createElement('p');
				page_nav_list.classList.add('page_nav_list');

				page_nav_list.innerHTML += '<a href="#" class="page-prev">Предыдущая</a>';
				for (i = 0; i < 8; i++) {
					page_nav_list.innerHTML += '<a href="#" class="page-list">' + (i + 1) + '</a>';
				}
				page_nav_list.innerHTML += '<a href="#" class="page-next">Следующая</a>';

				$.each(data.results, function(i, val) {

				var li = document.createElement('li');
				li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
				ul.appendChild(li);
				});

				$body.append(result);
				result.appendChild(ul);
				result.appendChild(page_nav);
				page_nav.appendChild(page_nav_list);

				var setAnchors = function(p) {

					$anchors = $('.page-list');
					$.each($anchors, function(i) {
						$anchors[i].addEventListener('click', function(e) {
							e.preventDefault();
							$ajaxSearch(i);
						});
					});

					$('.page-next')[0].addEventListener('click', function(e) {
						e.preventDefault();
						$ajaxSearch(p + 1);
					});

					$('.page-prev')[0].addEventListener('click', function(e) {
						e.preventDefault();
						$ajaxSearch(p - 1);
					});

					$anchors[p].classList.add('active');
				};

				setAnchors(p);
            }
        });
        $('.result').remove();
    };

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