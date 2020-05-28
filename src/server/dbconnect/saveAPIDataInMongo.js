import { Character } from '../Models/CharacterInfo';

const axios = require('axios');

const saveDataInMongo = async (maxPages) => {
  const totalDocs = await Character.countDocuments();
  let page = 1; let docs = [];
  if (!totalDocs) {
    console.log('Loading data ...');
    while (page <= maxPages) {
      // eslint-disable-next-line no-await-in-loop
      const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      console.log(`Completed ${page * 20}`);
      // eslint-disable-next-line no-plusplus
      page++;
      docs = docs.concat(result.data.results);
      docs = docs.filter((doc, index, self) => index === self.findIndex(t => (
        t.id === doc.id
      )));
    }
    console.log('########### Data loading completed. #############');
    docs = docs.map(({
      id, name, image, species, status, created, origin, location
    }) => ({
      id,
      name,
      image,
      species,
      status,
      created,
      origin,
      location,
    }));
    await Character.insertMany(docs);
  }
};


module.exports = saveDataInMongo;
