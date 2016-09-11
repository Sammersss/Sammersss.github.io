var json = {
	blocks:[
		{
			id: "animated-thumbnials_1",
			dataCount: "16",
			links:[
				{
					href: "img/clean_environment/1-lightbox.jpg",
					src: "img/clean_environment/1.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/2-lightbox.jpg",
					src: "img/clean_environment/2.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/3-lightbox.jpg",
					src: "img/clean_environment/3.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/4-lightbox.jpg",
					src: "img/clean_environment/4.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/5-lightbox.jpg",
					src: "img/clean_environment/5.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/6-lightbox.jpg",
					src: "img/clean_environment/6.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/7-lightbox.jpg",
					src: "img/clean_environment/7.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/8-lightbox.jpg",
					src: "img/clean_environment/8.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/9-lightbox.jpg",
					src: "img/clean_environment/9.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/10-lightbox.jpg",
					src: "img/clean_environment/10.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/11-lightbox.jpg",
					src: "img/clean_environment/11.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/12-lightbox.jpg",
					src: "img/clean_environment/12.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/13-lightbox.jpg",
					src: "img/clean_environment/13.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/14-lightbox.jpg",
					src: "img/clean_environment/14.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/15-lightbox.jpg",
					src: "img/clean_environment/15.jpg",
					alt: ""
				},
				{
					href: "img/clean_environment/16-lightbox.jpg",
					src: "img/clean_environment/16.jpg",
					alt: ""
				},


			]
		},
		{
			id: "animated-thumbnials_2",
			dataCount: "7",
			links:[
				{
					href: "img/sport/1.jpg",
					src: "img/sport/1_tb.jpg",
					alt: "На старт, увага , Руш!"
				},
				{
					href: "img/sport/2.jpg",
					src: "img/sport/2_tb.jpg",
					alt: "Так, я на коні"
				},
				{
					href: "img/sport/3.jpg",
					src: "img/sport/3_tb.jpg",
					alt: "Хоп хей ла-ла-лей, три девченки , семь пеарней"
				},
				{
					href: "img/sport/4.jpg",
					src: "img/sport/4_tb.jpg",
					alt: "Пара навей..."
				},
				{
					href: "img/sport/5.jpg",
					src: "img/sport/5_tb.jpg",
					alt: "Конем ходи..."
				},
				{
					href: "img/sport/6.jpg",
					src: "img/sport/6_tb.jpg",
					alt: "Тихше їдеш - далі будеш"
				},
				{
					href: "img/sport/7.jpg",
					src: "img/sport/7_tb.jpg",
					alt: "Св'яткові нагороди"
				},

			]
		},
		{
			id: "animated-thumbnials_3",
			dataCount: "5",
			links:[
				{
					href: "img/Nicholas_day/1.jpg",
					src: "img/Nicholas_day/1_tb.jpg",
					alt: "Nikolas"
				},
				{
					href: "img/Nicholas_day/2.jpg",
					src: "img/Nicholas_day/2_tb.jpg",
					alt: "croud"
				},
				{
					href: "img/Nicholas_day/3.jpg",
					src: "img/Nicholas_day/3_tb.jpg",
					alt: "Nikolas and girl"
				},
				{
					href: "img/Nicholas_day/4.jpg",
					src: "img/Nicholas_day/4_tb.jpg",
					alt: "Nikolas in park"
				},
				{
					href: "img/Nicholas_day/5.jpg",
					src: "img/Nicholas_day/5_tb.jpg",
					alt: "Nikolas horse"
				},

			]
		}
	]
}

//var blocksID = Object.keys( json.blocks).length;
//var links1 = Object.keys( json.blocks[0].links).length;
//var links2 = Object.keys( json.blocks[1].links).length;
//var links3 = Object.keys( json.blocks[2].links).length;
//
//var base = [];
//json.blocks.forEach(function(item, i, blocks) {
//	console.log( i+1 );
//	base += (i);
//});
//console.log('base:', base);
//
//console.log('blocksID:', blocksID);
//console.log('links1:', links1);
//console.log('links2:', links2);
//console.log('links3:', links3);


var templateInfo = document.getElementById("gallery-template").innerHTML;
var template = Handlebars.compile(templateInfo);

var templateData = template(json);
document.getElementById('gallery_content').innerHTML += templateData;



