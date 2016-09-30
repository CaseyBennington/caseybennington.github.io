var elements = document.getElementsByTagName('script');

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header'),
			$postTitle = $('#post-title');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

		// Header scroll for banner pages
			if ($banner.length > 0 &&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}

		// Header scroll for post pages
			if ($postTitle.length > 0 &&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$postTitle.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}

		// Transitions for spotlight
			if ($('.spotlight')) {
				$('.spotlight').scrollex({
					mode: 'middle',
					top: '-65%',
					bottom: '-95%',
					delay: 80,
					initialize: function() { $(this).addClass('inactive'); },
					terminate:  function() { $(this).removeClass('inactive'); },
					enter:		  function() { $(this).removeClass('inactive'); },
					leave: 			function() { $(this).addClass('inactive'); }
				});
			}
	});
})(jQuery);

// AJAXify paginate
jQuery(document).ready(function($) {
	var siteUrl = 'https://'+(document.location.hostname||document.location.host);

	// Make sure that all clicked links that link to the internal website
	// don't just reload the page but execute a History.pushState call
	$(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
		e.preventDefault();
		History.pushState({}, "", this.pathname);
	});

	// Catch all History stateChange events
	History.Adapter.bind(window, 'statechange', function() {
		var State = History.getState();

		// Load the new state's URL via an Ajax Call
		$.get(State.url, function(data){
			// Replace the content of the main container (.content)
			$('#posts').html($(data).find('#posts'));

			// If you're using Google analytics, make sure the pageview is registered!
			// _gaq.push(['_trackPageview', State.url]);
			ga('send', 'pageview');
		});
	});
});
