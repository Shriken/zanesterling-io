function init() {
	document.querySelectorAll('.nav-link')
		.forEach(function(elem) {
			elem.onclick = function(event) {
				document.querySelectorAll('.section')
					.forEach(function(elem) {
						elem.style.display = "none";
					});

				let id = event.target.href.split('#')[1];
				let section = document.getElementById(id);
				section.style.display = "inline-block";
			};
		});
}

window.onload = init;
