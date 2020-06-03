// import { Character } from '../Models/CharacterInfo';
import bcrypt from 'bcrypt';
import { Character } from '../Models/CharacterInfo';
import { User } from '../Models/UserInfo';

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
    },

    checkUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user found ');
      }
      // user.password contains the hashed password
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error('Incorrect password ');
      }
      return user;
    }
  },

  Mutation: {
    createUser: async (root, args, context, info) => {
      const isEmailPresent = await User.findOne({ email: args.email });
      if (isEmailPresent.length != null) {
        throw new Error('Email id already exist');
      }
      args.password = await bcrypt.hash(args.password, 12);
      const res = await User.create(args);
      // eslint-disable-next-line no-return-await
      const registeredUser = await User.findOne({ email: res.email });
      if (registeredUser != null) {
        return 'User registered succesfully';
      }
    }
  },
};
