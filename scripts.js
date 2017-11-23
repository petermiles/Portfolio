window.addEventListener("scroll", function(e) {
	console.log(window.scrollY);
	let mastheadHelloShown,
		mastheadDescriptionShown = false;

	let masthead = document.getElementById("masthead");
	let mastheadHello = document.getElementById("masthead-hello");
	let mastheadDescriptionContainer = document.getElementById(
		"masthead-description-container"
	);
	let mastheadName = document.getElementById("masthead-name");

	let skills = document.getElementById("skills");

	if (window.scrollY > 65) {
		mastheadHello.style.transform = "scaleX(50%)";
		mastheadHello.style.width = "50%";
		mastheadHello.style.transform = "translateX(-50%)";
		mastheadDescriptionContainer.style.display = "inline";
		mastheadHello.style.backgroundcolor = "blue";
		mastheadName.classList.add("animated", "slideInRight");
	}

	if (window.scrollY > 300) {
		masthead.style.position = "relative";
		skills.style.visibility = "visible";
	}
});
