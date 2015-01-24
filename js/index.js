$(document).ready(function() {
	/*background array*/
	var bg_img = ['bg-sunrise',
	'bg-hood',
	'bg-chelsea-pier',
	'bg-nats',
	'bg-portland',
	'bg-bahama-sunset',
	'bg-eiffel',
	'bg-capitol',
	'bg-lucerne',
	'bg-jap-garden',
	'bg-london-bridge'
	];

	var bg_title = {
		'bg-sunrise': '[Sibilini Park, Italy]',
		'bg-hood': '[Mt. Hood - Portland, Oregon]',
		'bg-chelsea-pier': '[Chelsea Pier - New York City, New York]',
		'bg-nats': '[Nats Stadium - Washington, DC]',
		'bg-portland': '[Portland, Oregon]',
		'bg-bahama-sunset': '[Nassau, Bahamas]',
		'bg-eiffel': '[Eiffel Tower - Paris, France]',
		'bg-capitol': '[US Capitol - Washington, DC]',
		'bg-lucerne': '[Rhine River - Lucerne, France]',
		'bg-jap-garden': '[Japanese Garden - Portland, Oregon]',
		'bg-london-bridge': '[London Bridge - London, England]',
	};

	/*fadein to pages */
	$("body").animate({ opacity : "1.0" }, 500);
	
	/*generate random start background*/
	var random_int=Math.floor(Math.random()*(bg_img.length-1));
	$('#background-image').removeClass();
	$('#background-image').addClass(bg_img[random_int]);
	// var bg_selected = bg_img[random_int];
	$('#background-image').title = bg_title[bg_img[random_int]];
	$('.bg-desc').html(bg_title[bg_img[random_int]]);


	/*change backgrounds on click*/
	var x=random_int+1;
    $('#home-icon').click(function(){

		$('#background-image').removeClass();
		$('#background-image').addClass(bg_img[x]);
		$('#background-image').title = bg_title[bg_img[x]];
		$('.bg-desc').html(bg_title[bg_img[x]]);
		if(x<bg_img.length-1){
			x+=1;
		}
		else{
			x=0;
		}
    });
});