(function() {
	var dbm = (data);
	console.log('===========================================-----===-----===-----===========================================');
	console.log('JSON array of obj = ', dbm);
	console.log('===========================================-----===-----===-----===========================================');

	/*1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов,
	так же они должны быть отсортированы по алфавиту */

	// return an array of persons skills
	var skills =_.map(dbm, 'skills');
	var sortedSkills =_.sortedUniq(_.sortBy(_.map(_.flatten(skills), _.toLower)));

	console.log('\n1. Массив скиллов (поле skills) всех людей, отсортированы по алфавиту (без повторений):', sortedSkills);
	console.log('===========================================-----===-----===-----===========================================');

	/*2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends);*/

	// return an array of persons names and friens quantity
	var  persons = _.map(dbm, function(obj) {
		return { "name": obj.name, "friends": obj.friends.length }
	});

	//return the array of presons names ordered by friens quantity
	var personsNames  = _.map(_.sortBy(persons, "friends"), "name");
	console.log('\n2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends): \n', personsNames);
	console.log('===========================================-----===-----===-----===========================================');

	/*3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей*/

	//return the array of all presons friends
	var friends = _.sortedUniq(_.map(_.sortBy(_.flatten(_.map(dbm, "friends")), "name"), "name"));
	console.log('\n3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей:', friends);
	console.log('===========================================-----===-----===-----===========================================');

})();
