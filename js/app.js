'use strict';

const character = document.querySelector('.character');
const planet = document.querySelector('.planet');
const select = document.querySelector('#char-select');
const charImg = document.querySelector('#char-img');

select.addEventListener('click', () => {
	let randNumber = Math.floor(Math.random() * 12) + 1;
	if (randNumber === 17) {
		randNumber = 16;
	}
	getStarWars(randNumber);
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
