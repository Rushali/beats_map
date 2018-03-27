console.log('🌮 taco')

$( 'body').prepend('<button class="about_button" type="button">BEATS NYC</button>')

$(".about_button").click(function(element){
    console.log('about button');
    $('.media_cover').empty();

// adding the cover
    // $('body').prepend('<div class="media_cover"></div>')
    $(".media_cover").show();
    // adding a close button
    $('.media_cover').append('<p class="media_text">Beats NYC is a chaotic archive & data driven storytelling experiment in the WebGL world. It attempts to visualize subway music playing under New York. </p> <button class="close_button" type="button">X</button><br><br>')
    $('.about_button').hide();
    // adding an event listener to close the cover
    add_close_listerer();
});

$( ".mapboxgl-marker" ).click(function(element) {
    console.log('360 video');

	// adding the cover
	// $('body').prepend('<div class="media_cover"></div>')
    $(".media_cover").show();
    $('.media_cover').empty();
	// adding a close button
    $('.media_cover').append('<button class="close_button" type="button">X</button><br><br>')

    // adding an event listener to close the cover
  	add_close_listerer();


  	// adding the content based on the clicked element ID
	switch(element.target.id) {

    case '86th_2nd_Av':
    	$('.media_cover').append('<iframe src="../iframes/webgl_video2.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '72nd_2nd_Av':
        $('.media_cover').append('<iframe src="../iframes/underground.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '59th_St_-_Columbus_Circle':
        $('.media_cover').append('<iframe src="../iframes/webgl_video_panorama_equirectangular.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;    

    case 'LEXINGTON_AVENUE_-_59TH STREET':
    	$('.media_cover').append('<img src="../Data/Images/musician1.jpg" alt="musician in central park with saxophone" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; height:100%; border:none; padding:0; overflow:hidden;"> ');
    	break;

    case '53rd_STREET_-_Lexington_Avenue':
        $('.media_cover').append('<iframe src="../iframes/canvas_materials_video.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '47-50_Streets_-_Rockefeller_center':
        $('.media_cover').append('<iframe width="1120" height="630" src="https://www.youtube.com/embed/kszWN8TteIE" style="frameborder="0" allow="autoplay; encrypted-media" allowfullscreen position:fixed; margin: auto; width:100%; height:100%; overflow:hidden; "></iframe>');
        //<iframe width="560" height="315" src="https://www.youtube.com/embed/kszWN8TteIE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> top:0px; left:0px; bottom:0px; right:0px; border:none; margin:0; padding:0;
        break;

    case '42ND_STREET_-_PORT_AUTHORITY_BUS_TERMINAL':
        $('.media_cover').append('<iframe src="../iframes/underground.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case 'TIMES_SQUARE_-_42ND_STREET':
        $('.media_cover').append('<iframe src="" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case 'GRAND_CENTRAL_-_42ND_STREET':
        $('.media_cover').append('<iframe src="" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '34th_STREET_-_HERALD_SQUARE':
        $('.media_cover').append('<iframe src="" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '14th_STREET-UNION_SQUARE':
        $('.media_cover').append('<iframe src="../iframes/webgl_video2.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    default:
        console.log("❌ I'm sorry, I don't recognize this marker.")
}

});


function add_close_listerer(){

	$( ".close_button" ).click(function(element) {
	$('.media_cover').hide();
    $('.media_text').remove();
    $('.about_button').show();
	});
}
