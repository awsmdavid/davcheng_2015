$(document).ready(function() {
	var bg_img = ['bg-sunrise', 'bg-hood', 'bg-chelsea-pier', 'bg-portland', 'bg-lucerne', 'bg-jap-garden', 'bg-london-bridge'];
	$("body").animate({ opacity : "1.0" }, 500);
	var x=1;
    $('#home-icon').click(function(){

		$('#background-image').removeClass();
		$('#background-image').addClass(bg_img[x]);
		if(x<6){
			x+=1;
		}
		else{
			x=0;
		}
    });
});