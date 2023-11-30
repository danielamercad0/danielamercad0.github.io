// s1 outfit
let s1 = document.getElementById('s1');
/* the process: */
s1.onclick = function() {
	hideBody();
	hideOutfits();
	showOutfit('o1');
};

// s2 outfit
let s2 = document.getElementById('s2');
s2.onclick = function() {
	hideBody();
	hideOutfits();
	showOutfit('o2');
}

// s3 outfit
let s3 = document.getElementById('s3');
s3.onclick = function() {
	hideBody();
	hideOutfits();
	showOutfit('o3');
}

// s4 outfit
let s4 = document.getElementById('s4');
s4.onclick = function() {
	hideBody();
	hideOutfits();
	showOutfit('o4');
}

// s5 outfit
let s5 = document.getElementById('s5');
s5.onclick = function() {
	hideBody();
	hideOutfits();
	showOutfit('o5');
}

// strip outfit
let strip = document.getElementById('strip-button');
strip.onclick = function() {
	hideOutfits();
	showBody();
};

function hideBody() {
	let body = document.getElementById('body');
	body.style.display = 'none';
}

function hideOutfits() {
	let outfits = document.getElementsByClassName('outfit');
	for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = 'none';
	}
}

function showOutfit(outfitId) {
	let outfit = document.getElementById(outfitId);
	outfit.style.display = 'block';
}

function showBody() {
	let body = document.getElementById('body');
	body.style.display = 'block';
}