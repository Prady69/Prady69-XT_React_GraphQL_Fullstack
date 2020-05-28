// import { Character } from '../Models/CharacterInfo';
import { Character } from '../Models/CharacterInfo';

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    charactersAll: () => Character.find()
  }
};
