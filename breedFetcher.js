const request = require("request");
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error('error:', error);
    return;
  }

  //console.log('typeof:', typeof body);

  const data = JSON.parse(body);
  //console.log('data:', data);
  //console.log('typeof:', typeof data);

  if (data.length === 0) {
    console.log(`The requested breed, ${breed}, did not return any results.`);
    return;
  }

  console.log(data[0].description);
});
