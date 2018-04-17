//jquery
$(document).ready(function() {
	
	"use-strict:"
	//this will make javascript more strict on couse structure*/
	
	var topOffset=100;
	//activate scroll spy
	var sliderQty = $('#cDoctor .carousel-item').length;
	
	var wHeight =$(window).height();//gets the height of window
	
 	//Activate Scrollspy
	  $('body').scrollspy({
		target: '.navbar',
		offset: topOffset
	  });

	// add inbody class
  var hash = $(this).find('li a.active').attr('href');
	console.log(hash);
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');

  } else {
    $('header nav').removeClass('inbody');

  }
	

  // Add an inbody class to nav when scrollspy event fire	
		$(window).on('activate.bs.scrollspy', function() {
		var hash = $('#scrollspy-nav li').find('a.active').attr('href');
		if(hash !== '#featured') {
		 $('header nav').addClass('inbody');
		} else {
		  $('header nav').removeClass('inbody');
		  $('.bg-light').css({'background-color':'rgba(0,0,0,0.5)!important'});
		}
	  });

		
	
// Add smooth scrolling on all links inside the navbar
/*$("#navbarNav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});*/
//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') === 
			this.pathname.replace(/^\//,'') && 
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
			scrollTop: target.offset().top-topOffset+2
			}, 800);
		return false;
			} //target.length
		} //click function
	}); //smooth scrolling
	
	
	//auto indicator generator for caruosel
	for (var i = 0; i<sliderQty; i++)	{
		var insertText= '<li data-target="#cDoctor" data-slide-to="'+i+'"></li>';
			$('#cDoctor ol').append(insertText);
		}
	
	$('.fullHeight').css('height',wHeight);//.fullHeight= (var wHeight = windows.height)
		
	//replacd IMG carousel with a background-image
	$('#cDoctor .carousel-item img').each(function(){
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
		});
	
	//adjust elements of bg-imagesfullHeight on windows resize
	$(window).resize(function(){
		wHeight =$(window).height();//gets the height of window
		$('.fullHeight').css('height',wHeight);//when windows resizes .fullheight is equal to current windows height
	});
	
	//activate carousel
	$('#cDoctor').carousel({
		interval:5000,
		pause:false
	});

});



/*
#SOCIALMEDIA icons
*/
var socialMedia = {
	facebook: 'http://facebook.com/ijimlyn', 
	twitter: 'http://twitter.com/ijimlyn', 
	//youtube: 'http://youtube.com/',
	dribble:  'http://dribble.com/ijimlyn',
}

var social = function(){
	var output= '<ul>',
	myList =  document.querySelectorAll('.socialmediaicons');

	for(var key in arguments[0]){ /*arguments[0] points to socialMedia*/
		output+='<li><a href="'+socialMedia[key]+'" target="_blank"><img src="images/'+key+'.png" alt="icon for '+key+'"></a></li>';
	}

	for (var i = myList.length - 1; i >= 0; i--) {
		myList[i].innerHTML = output;
	}


	output += '</ul>';
}(socialMedia);



