console.log('🌮 taco');
var markerClicked = false;
$(document).ready(function() {



    $('body').prepend('<button class="about_button" type="button">NYC BEATS</button>');

    $(".marker").click(function(element) {
        markerClicked = true;
        $('.media_cover').empty();
        $(".media_cover").show();
        // adding a close button
        $('.media_cover').append('<button class="close_button" type="button">X</button><br><br>');
        // adding an event listener to close the cover
        // add_close_listener();
        // adding the content based on the clicked element ID
        switch (element.target.id) {
            case 'Yankee_Stadium':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '125th_8th_Av':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '125th_lexington_Av':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '96th_2nd_Av':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '86th_2nd_Av':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '72nd_2nd_Av':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '59th_St_-_Columbus_Circle':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'LEXINGTON_AVENUE_-_59TH STREET':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '53rd_STREET_-_Lexington_Avenue':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City.<br> Whoops there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case '47-50_Streets_-_Rockefeller_center':
                $('.media_cover').append('<iframe id="iframe1" src="../iframes/webgl_video3.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                //<iframe width="560" height="315" src="https://www.youtube.com/embed/kszWN8TteIE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> top:0px; left:0px; bottom:0px; right:0px; border:none; margin:0; padding:0;
                //<iframe width="1120" height="630" src="https://www.youtube.com/embed/kszWN8TteIE" style="frameborder="0" allow="autoplay; encrypted-media" allowfullscreen position:fixed; margin: auto; width:100%; height:100%; overflow:hidden; "></iframe>
                break;
            case '42ND_STREET_-_PORT_AUTHORITY_BUS_TERMINAL':
                $('.media_cover').append('<iframe id="2" src="../iframes/webgl_video1.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case 'TIMES_SQUARE_-_42ND_STREET':
                $('.media_cover').append('<iframe id="3" src="../iframes/webgl_video7.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case 'GRAND_CENTRAL_-_42ND_STREET':
                $('.media_cover').append('<iframe id="4" src="../iframes/webgl_video4.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case '34th_STREET_-_HERALD_SQUARE':
                $('.media_cover').append('<iframe id="5" src="../iframes/webgl_video6.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case '28th_STREET_Lexington_Avenue':
                $('.media_cover').append('<iframe id="6" src="../iframes/webgl_video5.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case '14th_STREET-UNION_SQUARE':
                $('.media_cover').append('<iframe id="7" src="../iframes/webgl_video2.html" style="position:fixed; margin: auto; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; "></iframe>');
                break;
            case 'ASTOR_PLACE':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'Fulton_Street':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'Fulton_Center':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'BOWLING_GREEN':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'Court_Street_&_Borough_Hall':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'ATLANTIC_AVENUE_-_BARCLAYS_CENTER':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'GRAND_ARMY_PLAZA':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'JACKSON_HEIGHTS_-_ROOSEVELT_AVENUE':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            case 'METS_-_WILLETS_AVENUE':
                $('.media_cover').append('<span id="add_here" style="font-family:Courier New, monospace; font-weight: bold; font-size: 40px;top: 20px;right: 100px;text-align: centre;padding-left: 100px;">This is an MTA MUNY allocated spot!!! Since 1985, Arts and Design has managed the Music Under New York (MTA MUSIC) program, to bring joyous and engaging  music to the commuting public. Classical violinists, Cajun cellists, jazz ensembles, bluesmen, Latin guitarists, opera and folk singers are just a few of the performers in the subway and train stations contributing to the music culture of New York City. <br> Whoops, there is no content for this spot! If you have any videos, email them to nycbeats.xyz@gmail.com</span>');
                break;
            default:
                console.log("❌ I'm sorry, I don't recognize this marker.")
        }

        $(".close_button").on("click", function() {
            //console.log("close button clicked");
            add_close_listener();
        })
    });

    $('#map').click(function(e) {
        //console.log(dragFlag);
        //console.log(markerClicked);
        if (!markerClicked && dragFlag == 0) {
            //console.log('map clicked');
            $('.form_cover').show();
            $('.arrow-down').show();
        } else {}
    });

    //$('#untilWhen').val(new Date().toDateInputValue());

    $(".about_button").click(function(element) {
        //console.log('about button');
        // adding the cover
        // $('body').prepend('<div class="media_cover"></div>')
        $('.about_cover').show();
        // adding a close button
        $('.about_cover').append('<button class="close_button" type="button">x</button><br><br>')
        $('.about_button').hide();
        // adding an event listener to close the cover

        $(".close_button").on("click", function() {
            //console.log("close button clicked");
            add_close_listener();
        });
    });

    function add_close_listener() {
        markerClicked = false;
        //console.log(markerClicked);
       
        $('.about_cover').hide();
        $('.media_cover').empty();
        $('.media_cover').hide();
        $('.media_text').remove();
        $('.about_button').show();
    }
})