console.log('🌮 taco')



$( ".mapboxgl-marker" ).click(function(element) {

	// adding the cover
	$('body').prepend('<div class="media_cover"></div>')

	// adding a close button
    $('.media_cover').append('<button class="close_button" type="button">close</button><br><br>')

    // adding an event listener to close the cover
  	add_close_listerer();


  	// adding the content based on the clicked element ID
	switch(element.target.id) {

    case '53rd_STREET_-_Lexington_Avenue':
    	$('.media_cover').append('<iframe src="/dist/vrview-master/examples/video/index.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
        break;

    case '72nd_2nd_Av':
    	$('.media_cover').append('<img src="Data/Images/musician1.jpg" alt="musician in central park with saxophone" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; height:100%; border:none; padding:0; overflow:hidden;"> ');
    	break;

    default:
        console.log("❌ I'm sorry, I don't recognize this marker.")
}

});


function add_close_listerer(){

	$( ".close_button" ).click(function(element) {
	$('.media_cover').remove()
	});
}
