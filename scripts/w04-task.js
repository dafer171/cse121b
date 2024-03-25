/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
  name: 'David Peña',
  photo: 'images/profilePicture.jpg',
  favoriteFoods: ['Paella', 'Tacos', 'Burritos', 'Empanadas', 'Lasagna'],
  hobbies: ['Play Soccer', 'Play Videogames', 'Play Piano'],
  placedLives: [],
};

/* Populate Profile Object with placesLive objects */
myprofile.placedLives.push(
  {
    place: 'Esmeraldas',
    length: '6 years',
  },
  {
    place: 'Guayaquil',
    length: '6 years',
  },
  {
    place: 'Almeria',
    length: '7 years',
  },
  {
    place: 'Mahon',
    length: '1 year',
  },
  {
    place: 'Huercal',
    length: '2 years',
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myprofile.name;

/* Photo with attributes */
document.querySelector('img').src = myprofile.photo;
document.querySelector('img').alt = myprofile.name;

/* Favorite Foods List*/
myprofile.favoriteFoods.forEach((food) => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myprofile.hobbies.forEach((hobbie) => {
  let li = document.createElement('li');
  li.textContent = hobbie;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myprofile.placedLives.forEach((place) => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
