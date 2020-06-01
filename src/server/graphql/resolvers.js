// import { Character } from '../Models/CharacterInfo';
import { Character } from '../Models/CharacterInfo';

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    characters: async (_, { filter }) => {
      console.log(JSON.parse(JSON.stringify(filter)));
      const results = await Character.find(JSON.parse(JSON.stringify(filter)));
      return { results };
    },

    // > db.characters.find({ "species": { $nin: ["Human", "Alien"] } })

    characterNamesSearch: async (_, { filter }) => {
      // eslint-disable-next-line implicit-arrow-linebreak
      const results = await Character.find({ name: new RegExp(filter, 'i') });
      return { results };
    }
  }
};
