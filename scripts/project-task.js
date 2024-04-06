let selectedRegion = '';
const regionsElement = document.getElementById('countries');
let countryList = [];

/* reset Function */
const reset = () => {
  regionsElement.innerHTML = '';
};

/* filterRegions Function */
const filterRegions = () => {
  const filter = document.getElementById('filteredRegion').value;
  selectedRegion = filter;
  console.log(selectedRegion);

  reset();
  getCountries();
};

/* async displayRegions Function */
const displayCountries = (countries) => {
  countries.forEach((country) => {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.textContent = country.EnglishName;

    article.appendChild(p);

    regionsElement.appendChild(article);
  });
};

/* async getRegions Function using fetch()*/
const apiKey = '17lC1T1dYh44AxooMQWDrl0EJYlNQALB';
const getCountries = async () => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/countries/${selectedRegion}?apikey=${apiKey}`
  );
  countriesList = await response.json();
  console.log(countriesList);
  displayCountries(countriesList);
};

/* Event Listener */
document
  .querySelector('#filteredRegion')
  .addEventListener('change', filterRegions);
