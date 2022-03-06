'use strict';

const character = document.querySelector('.character');
const planet = document.querySelector('.planet');
const select = document.querySelector('#char-select');
const charImg = document.querySelector('#char-img');
const arrChars = [];

for (let i = 1; i <= 12; i++) {
	arrChars.push(i);
}

console.log(arrChars);

select.addEventListener('click', () => {
	let charIndex = Math.floor(Math.random() * arrChars.length);
	let chosenChar = arrChars[charIndex];

	if (arrChars.length > 0) {
		getStarWars(chosenChar);
		arrChars.splice(charIndex, 1);
	} else {
		charImg.src = 'imgs/cover.jpg';
		character.innerText = '';
		planet.innerText = '';
	}
});

const getStarWars = async (id) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
		const name = await res.data.name;
		const world = await axios.get(res.data.homeworld);
		const result = await world.data.name;
		character.innerText = name;
		planet.innerText = result;
		charImg.src = `imgs/${id}.jpg`;
	} catch (e) {
		console.log(e);
	}
};
