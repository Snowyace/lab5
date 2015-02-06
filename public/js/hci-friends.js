'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".header").click(nameClick);
}

function nameClick(event) {
	event.preventDefault();
	console.log("clicked");
	$(this).css("color", "red");
	console.log(this);
	$(this).text((anagrammedName($(this).text())));

}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	console.log(name);
	if (name == "Bismark") {
		return "Bask Rim";
	} 
	else if (name == "Ravana") {
		return "Van Aar";
	}
	else if (name == "Takashi Kamiyama") {
		return "Miasmata Kayak Hi";
	}
	else if (name == "Chocobo") {
		return "Hob Coco";
	}
	else if (name == "Noctis") {
		return "Tonics";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}