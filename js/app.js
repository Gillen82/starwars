'use strict';

const character = document.querySelector('.character');
const planet = document.querySelector('.planet');
const select = document.querySelector('#char-select');
const charImg = document.querySelector('#char-img');
const arrChars = [];

// Add characters to array
for (let i = 1; i <= 20; i++) {
	arrChars.push(i);
}

// Remove 17 as not available through API
arrChars.splice(16, 1);

select.addEventListener('click', () => {
	// Get random index from array
	let charIndex = Math.floor(Math.random() * arrChars.length);
	// Get character from given index
	let chosenChar = arrChars[charIndex];

	// Make sure array has elements remaining
	if (arrChars.length > 0) {
		// Call function to display details
		getStarWars(chosenChar);
		// Remove character from array
		arrChars.splice(charIndex, 1);
	} else {
		// Reset all details (will require reload or refresh to use again)
		charImg.src = 'imgs/cover.jpg';
		character.innerText = '';
		planet.innerText = '';
	}
});

const getStarWars = async (id) => {
	try {
		// Connect to SWAPI, getting person based on argument (id)
		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
		// Extract person's name
		const charName = await res.data.name;
		// Use resolution to find character's homeworld details
		const world = await axios.get(res.data.homeworld);
		// Extract name of planet
		const result = await world.data.name;

		// Update HTML values with returned data
		character.innerText = charName;
		planet.innerText = result;
		charImg.src = `imgs/${id}.jpg`;
	} catch (e) {
		// CAtch and log any errors encountered
		console.log('ERROR: ', e);
	}
};
