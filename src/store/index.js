import { observable, decorate } from 'mobx';

class Store {
	@observable galaxies = 0;

	addGalaxies () {
		this.galaxies += this.getRandomGalaxies();
	}

	getRandomGalaxies () {
		return Math.floor(Math.random() * 10);
	}
}

const store = new Store();

setInterval(() => {
	store.addGalaxies();
}, 100);

export default store;