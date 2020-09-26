const fetch = require("node-fetch");

//2a
function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {  
  let hamDer={name: "", firstFilm: "", firstSpecies: "", homeworldForSpecie: ""};
  fetch("https://swapi.dev/api/people/" + id).then((res) => res.json())
    .then((data) => {
      hamDer.name = data.name;
      return fetch(data.films[0]).then((res) => res.json())
    })
    .then((data) => {
    hamDer.firstFilm = data.title;
    return fetch(data.species[0]).then((res) => res.json())
    })
    .then((data) => {
        hamDer.firstSpecies = data.name;
        return fetch(data.homeworld).then((res) => res.json())
    })
    .then((data) => {
        hamDer.homeworldForSpecie = data.name;
        console.log(hamDer);
    })
    .catch((err)=> {console.log(err)})
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1);

//2b
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    try {
      const fetchPeople = await fetch("https://swapi.dev/api/people/" + id).then(res => res.json());
      const fetchFilm = await fetch(fetchPeople.films[0]).then(res => res.json());
      const fetchSpecies = await fetch(fetchFilm.species[0]).then(res => res.json());
      const fetchHomeworld = await fetch(fetchSpecies.homeworld).then(res => res.json());
      let hamDer={name: fetchPeople.name, firstFilm: fetchFilm.title, firstSpecies: fetchSpecies.name, homeworldForSpecie: fetchHomeworld.name};
      console.log(hamDer);
    }
    catch (err) {
      console.log(err);
    }
  }

//getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
