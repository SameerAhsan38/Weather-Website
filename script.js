
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b07f3f4495mshaf042a1ca7b6fb3p1b8e0ajsn43fe318deb30',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    //cityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
(async () => {
    try {
      const response  = await fetch(url, options);
      const result = await response.text();
      const parsedData = JSON.parse(result); 
      const {
        temp,
        feels_like,
        humidity,
        min_temp,
        max_temp,
        wind_speed,
        wind_degrees,
        sunrise,
        sunset,
        temp2,
        humidity2,
        wind_speed2
        
      } = parsedData;
     // document.getElementById('cloud_pct').innerHTML = ` ${cloud_pct}`;
      document.getElementById('temp').innerHTML = `${temp}`;
      document.getElementById('temp2').innerHTML = `${temp}`;
      document.getElementById('feels_like').innerHTML = `${feels_like}`;
      document.getElementById('humidity').innerHTML = `${humidity}`;
      document.getElementById('humidity2').innerHTML = `${humidity}`;
      document.getElementById('min_temp').innerHTML = ` ${min_temp}`;
      document.getElementById('max_temp').innerHTML = `${max_temp}`;
      document.getElementById('wind_speed').innerHTML = ` ${wind_speed}`;
      document.getElementById('wind_speed2').innerHTML = ` ${wind_speed}`;
      document.getElementById('wind_degrees').innerHTML = ` ${wind_degrees}`;
      document.getElementById('sunrise').innerHTML = ` ${sunrise}`;
      document.getElementById('sunset').innerHTML = `${sunset}`;
      document.getElementById('cityName').innerHTML = `${city}`;
    console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")