'use strict';

const character = document.querySelector('.character');
const planet = document.querySelector('.planet');
const select = document.querySelector('#char-select');

select.addEventListener('click', () => {
	let randNumber = Math.floor(Math.random() * 82) + 1;
	getStarWars(randNumber);
});

const getStarWars = async (id) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
		const name = res.data.name;
		character.innerText = name;
		const world = await axios.get(res.data.homeworld);
		const result = world.data.name;
		planet.innerText = result;
	} catch (e) {
		console.log(e);
	}
};
