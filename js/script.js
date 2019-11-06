//script.js

/*---------------
Declare Variables
----------------*/
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4

//set first image opacity
imgs[0].style.opacity = opacity;

/*using array destructuring, 
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

/*Add Event Listeners*/
imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));
imgs.forEach(img => img.addEventListener('click', imgClick));

	function imgClick(e) {
		//Reset the opacity
		imgs.forEach(img => (img.style.opacity = 1));

		//change current image to src of clicked image. 
		current.src = e.target.src;

		//Add fade-in class
		current.classList.add('fade-in');

		//Remove fade-in class after .5seconds
		setTimeout(() => current.classList.remove('fade-in'), 500);
		
        //change the opacity to opacity var.
		e.target.style.opacity = opacity;

}

