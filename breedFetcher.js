const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }

      const data = JSON.parse(body);

      if (data.length === 0) {
        if (!breedName) {
          callback('Use syntax: node index.js breedName to return a result.', null);
          return;
        }
        callback(`The requested breed, ${breedName}, did not return any results.`, null);
        return;
      }

      callback(null, data[0].description);
    });
};

module.exports = { fetchBreedDescription };