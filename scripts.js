window.addEventListener("scroll", function(e) {
	let height = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight
	);

	let width = Math.max(
		document.body.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.clientWidth,
		document.documentElement.scrollWidth,
		document.documentElement.offsetWidth
	);

	let heightPer = Math.round(window.scrollY / height * 100);

	// Masthead Tags
	let masthead = document.getElementById("masthead");
	let mastheadHello = document.getElementById("masthead-hello");
	let mastheadDescriptionContainer = document.getElementById(
		"masthead-description-container"
	);
	let mastheadDescriptionText = document.getElementById(
		"masthead-description-text"
	);

	// Skills Tags
	let skills = document.getElementById("skills");
	let skillsText = [
		document.getElementById("skills-title"),
		document.getElementById("skills-text")
	];

	// Portfolio Tags

	let portfolio = document.getElementById("portfolio");

	console.log(heightPer);
	if (heightPer > 8) {
		mastheadDescriptionShown = true;
		mastheadHello.style.transform = "scaleX(50%)";
		mastheadHello.style.width = "50%";
		mastheadHello.style.transform = "translateX(-50%)";
		mastheadDescriptionContainer.style.display = "inline";
		mastheadHello.style.backgroundcolor = "blue";
		mastheadDescriptionText.classList.add("animated", "slideInRight");
	}

	if (heightPer > 20) {
		masthead.style.position = "relative";
		masthead.style.top = "0";
		skills.style.transform = "scale(1,1)";
		skillsText.map(x => {
			x.style.animationDuration = ".5s";
			x.classList.add("animated", "slideInLeft");
		});
		_.mapObject(document.getElementsByClassName("img-icon"), x => {
			// x.style.transitionDelay = (0.3 * i).toString();
			x.style.animationDuration = ".8s";
			x.classList.add("animated", "fadeIn");
			console.log(x);
		});
	}

	if (heightPer > 45) {
		portfolio.style.display = "inline";
	}
});
