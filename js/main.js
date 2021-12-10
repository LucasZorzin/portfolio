//// Loader
window.onload = () => {
	setTimeout(() => {
		const contenedor = $("#loader")[0];
		contenedor.style.visibility = 'hidden';
	}, 370);
}
$('#loader').on("contextmenu", (e) => { return false; });

//// Fullpage preferences
const pageSections = new fullpage('#fullpage', {
	autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 600,
	scrollBar:true,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
	navigation: false,
	menu: '#menu',
	anchors: ['home', 'about-me','my-work', 'skills', 'contact'],
	navigationTooltips: ['Home', 'About Me', 'My Work', 'Skills', 'Contact'],
	showActiveTooltip: false,
});

//// Parallax effect (home)
(() => {
	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector('#parallax');
	function parallax(e) {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let mouseX = e.clientX;
		let mouseY = e.clientY;
		let move = `${40 - (mouseX - w) * 0.025}% ${15 - (mouseY - h) * 0.090}%`;
		let x = `${move}`;
		elem.style.backgroundPosition = x;
	}
})();

//// Arrow scrolldown
$('.home__arrow').on("contextmenu", (e) => { return false; });

//// Particles JS
particlesJS(
	{
		"particles": {
			"number": {
				"value": 160,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.24035957792858095,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 0.5,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 250,
					"size": 0,
					"duration": 2,
					"opacity": 0,
					"speed": 3
				},
				"repulse": {
					"distance": 90,
					"duration": 0.3
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}
);

//// CAROUSEL
$('.carousel-portfolio').slick({
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	pauseOnFocus: false,
	autoplaySpeed:2700,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

$('.carousel-skills').slick({
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	pauseOnFocus: false,
	autoplaySpeed:2700,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

//// Typed
// Home
var typed = new Typed('.typed-home', {
	strings: ["Front-End Web Developer."],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
// My works
	typed = new Typed('.typed', {
	strings: ["I've worked on in the past.", "I'm proud of."],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// Modal
const tacobox = $('.works-modal')[0];
const greecX = $('.works-modal')[1];
const taurus = $('.works-modal')[2];
const cd = $('.works-modal')[3];
$('.tacobox').click(() => {
    tacobox.classList.add('modal-active');
	$('.carousel-portfolio').css({'opacity':'0.5', 'filter':'blur(3px)'});
})
$('.greec-x').click(() => {
    greecX.classList.add('modal-active');
	$('.carousel-portfolio').css({'opacity':'0.5', 'filter':'blur(3px)'});
})
$('.taurus').click(() => {
    taurus.classList.add('modal-active');
	$('.carousel-portfolio').css({'opacity':'0.5', 'filter':'blur(3px)'});
})
$('.cd').click(() => {
    cd.classList.add('modal-active');
	$('.carousel-portfolio').css({'opacity':'0.5', 'filter':'blur(3px)'});
})

// close btn
$('.close-btn').click(() => {
    tacobox.classList.remove('modal-active');
	$('.carousel-portfolio').css({'opacity':'1', 'filter':'none'});
});
$('.close-btn').click(() => {
    greecX.classList.remove('modal-active');
	$('.carousel-portfolio').css({'opacity':'1', 'filter':'none'});
});
$('.close-btn').click(() => {
    taurus.classList.remove('modal-active');
	$('.carousel-portfolio').css({'opacity':'1', 'filter':'none'});
});
$('.close-btn').click(() => {
    cd.classList.remove('modal-active');
	$('.carousel-portfolio').css({'opacity':'1', 'filter':'none'});
});

// menu
// $(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this)[0].classList.toggle('open');
		$('.navbar')[0].classList.toggle('open-nav');
	});

$('.navbar__item-link').click(()=>{
	$('.navbar')[0].classList.toggle('open-nav');
	$('#nav-icon')[0].classList.toggle('open');
})