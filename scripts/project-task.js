let selectedRegion = '';
let selectedCountry = '';
let selectedArea = '';
let searchedCity = '';
let searchedCityID = '';

const regionsElement = document.getElementById('filteredCountry');

/* reset Function */
const reset = () => {
  regionsElement.innerHTML = '';
};

/* filterRegions Function */
const filterRegions = () => {
  const filter = document.getElementById('filteredRegion').value;
  selectedRegion = filter;
  //console.log(selectedRegion);

  reset();
  getCountries();
};

/* filterCountries Function */
const filterCountries = () => {
  selectedCountry = document.getElementById('filteredCountry').value;
  //console.log(selectedCountry);
  getArea();
};

/* async displayCountries Function */
const displayCountries = (countries) => {
  const countrySelect = document.getElementById('filteredCountry');
  countrySelect.innerHTML =
    '<option value="" disabled selected>Filter Countries</option>';

  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.ID;
    option.textContent = country.EnglishName;

    countrySelect.appendChild(option);
  });
};

/* async displayAreas Function */
const displayAreas = (areas) => {
  const areaSelect = document.getElementById('filteredArea');
  areaSelect.innerHTML =
    '<option value="" disabled selected>Filter Areas</option>';

  areas.forEach((area) => {
    const option = document.createElement('option');
    option.value = area.ID;
    option.textContent = area.EnglishName;

    areaSelect.appendChild(option);
  });
};

/* async getCountries Function using fetch()*/
const apiKey = '17lC1T1dYh44AxooMQWDrl0EJYlNQALB';
const getCountries = async () => {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/countries/${selectedRegion}?apikey=${apiKey}`
  );
  const countriesList = await response.json();
  //console.log(countriesList);
  displayCountries(countriesList);
};

/* async getArea Function using fetch()*/
const getArea = async () => {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/adminareas/${selectedCountry}?apikey=${apiKey}`
  );
  const areaList = await response.json();
  //console.log(areaList);
  displayAreas(areaList);
};

/* async cityID Function using fetch()*/
const cityID = async () => {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/${selectedCountry}/${selectedArea}/search?apikey=${apiKey}&q=${searchedCity}`
  );
  const cityData = await response.json();
  //console.log(cityData);

  if (cityData.length > 0) {
    const firstResult = cityData[0];
    searchedCityID = firstResult.Key;
    console.log(searchedCityID);
  }
  forecast();
};

const forecast = async () => {
  const response = await fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${searchedCityID}?apikey=${apiKey}`
  );
  const forecastData = await response.json();
  console.log(forecastData);

  const headline = forecastData.Headline.Text;
  const dailyForecast = forecastData.DailyForecasts[0];
  const minTemperature = dailyForecast.Temperature.Minimum.Value;
  const maxTemperature = dailyForecast.Temperature.Maximum.Value;
  const dayIconPhrase = dailyForecast.Day.IconPhrase;
  const nightIconPhrase = dailyForecast.Night.IconPhrase;

  const forecastElement = document.getElementById('forecast');
  forecastElement.innerHTML = `
    <h3>${headline}</h3>
    <p>Minimum Temperature: ${minTemperature} F</p>
    <p>Maximum Temperature: ${maxTemperature} F</p>
    <p>Day Icon Phrase: ${dayIconPhrase}</p>
    <p>Night Icon Phrase: ${nightIconPhrase}</p>
  `;
};

/* Event Listeners */
document
  .querySelector('#filteredRegion')
  .addEventListener('change', filterRegions);

document
  .querySelector('#filteredCountry')
  .addEventListener('change', filterCountries);

document.querySelector('#filteredArea').addEventListener('change', () => {
  selectedArea = document.getElementById('filteredArea').value;
  //console.log(selectedArea);
});

document.getElementById('searchButton').addEventListener('click', () => {
  searchedCity = document.getElementById('cityInput').value.trim();
  //console.log(searchedCity);
  const errorMessageElement = document.getElementById('errorMessage');

  if (searchedCity) {
    cityID();
    errorMessageElement.textContent = '';
  } else {
    errorMessageElement.textContent = 'Please enter a city name.';
  }
});
