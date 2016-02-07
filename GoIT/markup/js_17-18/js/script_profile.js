$(function(){

    var html = $('#test').html();
    var data = {
        name: 'Артемчук Александр Владимирович',
        photo_url: "img/photo.jpg",
        work: "Работник картографической фирмы",
        learning_reasons: "Хочу учить frontend потому что:",
        reasons_list: ["Карты делать уже не интересно",
                       "Платят мало",
                       "Нет возможности работать удаленно"],
        contact_phone: "Мой контактный телефон",
        phone_number:"+380 66 7995886",
        social_profile: "Мой профиль в facebook",
        social_network: "https://www.facebook.com/Aleksandr.Artem",
        facebook_url: "facebook.com",
        feedback_title: "Мой feedback:",
        feedback: "Если нужно, помогу прокласть маршрут к дому )"
    };

    var content = tmpl(html,data)

    $('body').append(content);
});