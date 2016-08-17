jQuery(document).ready(function(){
	var scripts = document.getElementsByTagName("script");
	var jsFolder = "";
	for (var i= 0; i< scripts.length; i++)
	{
		if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
			jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
	}
	if ( typeof html5Lightbox === "undefined" )
	{
		html5Lightbox = jQuery(".html5lightbox").html5lightbox({
			skinsfoldername:"",
			jsfolder:jsFolder,
			barheight:100,
			showtitle:true,
			showdescription:true,
			shownavigation:true,
			thumbwidth:50,
			thumbheight:40,
			thumbtopmargin:5,
			thumbbottommargin:8,
			titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
			descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;display: block;}'
		});
	}
	jQuery("#amazingcarousel-1").amazingcarousel({
		jsfolder:jsFolder,
		width:280,
		height:120,
		skinsfoldername:"",
		interval:3000,
		itembottomshadowimagetop:100,
		donotcrop:false,
		random:true,
		showhoveroverlay:true,
		rownumber:1,
		arrowheight:32,
		showbottomshadow:false,
		itembackgroundimagewidth:100,
		imageheight:120,
		skin:"TestimonialCarousel",
		responsive:true,
		lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
		enabletouchswipe:true,
		navstyle:"bullets",
		backgroundimagetop:-40,
		arrowstyle:"mouseover",
		bottomshadowimagetop:95,
		hidehoveroverlayontouch:false,
		continuous:false,
		itembackgroundimagetop:0,
		hoveroverlayimage:"hoveroverlay-64-64-6.png",
		itembottomshadowimage:"itembottomshadow-100-98-3.png",
		lightboxshowdescription:true,
		navswitchonmouseover:false,
		showhoveroverlayalways:true,
		transitioneasing:"easeInOutElastic",
		lightboxshownavigation:true,
		showitembackgroundimage:false,
		itembackgroundimage:"",
		playvideoimagepos:"center",
		circular:true,
		arrowimage:"arrows-32-32-1.png",
		scrollitems:1,
		direction:"horizontal",
		lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;display: block;}",
		supportiframe:false,
		navimage:"bullet-24-24-0.png",
		backgroundimagewidth:110,
		showbackgroundimage:false,
		lightboxbarheight:100,
		showplayvideo:true,
		spacing:4,
		lightboxthumbwidth:50,
		navdirection:"horizontal",
		itembottomshadowimagewidth:100,
		backgroundimage:"",
		lightboxthumbtopmargin:5,
		autoplay:false,
		lightboxnogroup:false,
		arrowwidth:32,
		transparent:true,
		continuousduration:2500,
		bottomshadowimage:"bottomshadow-110-95-0.png",
		scrollmode:"page",
		navmode:"page",
		lightboxshowtitle:true,
		lightboxthumbbottommargin:8,
		arrowhideonmouseleave:600,
		showitembottomshadow:false,
		lightboxthumbheight:40,
		navspacing:4,
		pauseonmouseover:true,
		imagefillcolor:"FFFFFF",
		playvideoimage:"playvideo-64-64-2.png",
		transitionduration:4000,
		visibleitems:4,
		imagewidth:120,
		usescreenquery:false,
		bottomshadowimagewidth:110,
		screenquery:{
	tablet: {
		screenwidth: 900,
		visibleitems: 2
	},
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
		navwidth:24,
		loop:0,
		navheight:24
	});
});
