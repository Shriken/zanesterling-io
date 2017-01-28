function nav_link_click(event) {
	document.querySelectorAll('.section')
		.forEach(function(elem) {
			elem.style.display = 'none';
		});

	// Make section visible
	let id = event.target.href.split('#')[1];
	let section = document.getElementById(id);
	section.style.display = 'inline-block';

	// Unstyle old nav-item
	let old_nav_item = document.querySelector('.nav-link.active');
	old_nav_item.className = old_nav_item.className.replace(/(?:^|\s)active(?!\S)/g , '');

	// Style nav-item
	let nav_item = event.target;
	nav_item.className += ' active';
}


function init() {
	document.querySelectorAll('.nav-link')
		.forEach(function(elem) {
			elem.onclick = nav_link_click;
		});
}

window.onload = init;
