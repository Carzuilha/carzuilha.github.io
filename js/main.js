/***************************** Static values ***************************/

var helloCvsY = $('#hello-banner').backgroundPosition()[1];
var exprnCvsY = $('#experience-banner').backgroundPosition()[1];
var awrdsCvsY = $('#awards-banner').backgroundPosition()[1];
var cntctCvsY = $('#contact-banner').backgroundPosition()[1];

/*************************** Loading document **************************/

window.onload = function () {

	document.documentElement.scrollTop = 0;

	setTimeout(function () { $('#hello-box').replaceClass('boxHidden', 'boxShow'); }, 0);
	setTimeout(function () { $('#hello-banner').replaceClass('imageHidden', 'imageShow'); }, 1000);

	setTimeout(function () {
		$('#hello-box').replaceClass('textHidden', 'textShow');
		$('#menu-name').replaceClass('textHidden', 'textShow');
		$('#menu-social').replaceClass('iconHidden', 'iconShow');
		$('#about-info').replaceClass('textHidden', 'textShow');
		$('#about-validation').replaceClass('imageHidden', 'imageShow'); 
	}, 1000);

};

/************************** Scrolling document *************************/

window.onscroll = function () {

	setTimeout(function() {
		$('#hello-banner').applyParallaxToDiv(.2, parseInt(helloCvsY));
		$('#experience-banner').applyParallaxToDiv(.2, parseInt(exprnCvsY)); 
		$('#awards-banner').applyParallaxToDiv(.2, parseInt(awrdsCvsY));
		$('#contact-banner').applyParallaxToDiv(.2, parseInt(cntctCvsY));
	}, 0);

	setTimeout(function() { 
		$('#intro-content').animateSection();
		$('#intro-canvas').animateSection();
		$('#education-content').animateSection();
		$('#education-canvas').animateSection();
		$('#experience-title').animateSection();
		$('#experience-content-a').animateSection();
		$('#experience-canvas-a').animateSection();
		$('#experience-content-b').animateSection();
		$('#experience-canvas-b').animateSection();
		$('#experience-content-c').animateSection();
		$('#experience-canvas-c').animateSection();
		$('#experience-content-d').animateSection();
		$('#experience-canvas-d').animateSection();
		$('#awards-content').animateSection();
		$('#awards-canvas').animateSection();
		$('#skills-content').animateSection();
		$('#skills-canvas').animateSection();
		$('#contact-content').animateSection();
		$('#contact-canvas').animateSection();
	}, 100);

};