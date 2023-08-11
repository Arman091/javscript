async function getWeather() {
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f33ac43626msh11910bb345fa998p121311jsnc62f98aa8170",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getWeather();
