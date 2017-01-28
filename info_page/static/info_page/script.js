function nav_link_click(event) {
	if (event.metaKey || event.ctrlKey) {
		return;
	}

	let id = event.target.href.split('#')[1];
	focus_section(id);
}

function focus_section(id) {
	// Make old section invisible
	document.querySelectorAll('.section')
		.forEach(function(elem) {
			elem.className = elem.className.replace(/(?:^|\s)active(?!\S)/g , '');
		});

	// Make section visible
	let section = document.getElementById(id);
	section.className += ' active';

	// Unstyle old nav-item
	let old_nav_item = document.querySelector('.nav-link.active');
	old_nav_item.className = old_nav_item.className.replace(/(?:^|\s)active(?!\S)/g , '');

	// Style nav-item
	let nav_item = document.querySelector('a[href="#' + id + '"]');
	nav_item.className += ' active';
}


function init() {
	document.querySelectorAll('.nav-link')
		.forEach(function(elem) {
			elem.onclick = nav_link_click;
		});

	if (window.location.hash) {
		focus_section(window.location.hash.slice(1));
	} else {
		focus_section('bio');
	}
}

window.onload = init;
