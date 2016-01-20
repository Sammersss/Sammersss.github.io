(function() {
    document.addEventListener('DOMContentLoaded', loadContent);

    function loadContent() {
        var data = {
            name: "Артемчук Александр Владимирович",
            photo_url: "img/photo.jpg",
            job_title: "Работник картографической фирмы",
            motivation: "Хочу учить frontend потому что:",
            motive_list: ["Карты делать уже не интересно",
                          "Платят мало",
                          "Нет возможности работать удаленно"],
            phone_title: "Мой контактный телефон",
            phone_number:"+380 66 7995886",
            facebook_title: "Мой профиль в facebook",
            facebook_address: "https://www.facebook.com/Aleksandr.Artem",
            facebook_url: "facebook.com",
            feedback_title: "Мой feedback:",
            feedback: "Если нужно, помогу прокласть маршрут к дому )"
        };
        var target = document.getElementById("results");
        var profile = _.template(document.getElementById("profile").innerHTML);
        target.innerHTML = profile(data);
    }

})();