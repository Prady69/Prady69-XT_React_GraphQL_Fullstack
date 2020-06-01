import CharacterSchema, { AutoSuggestionCharacterSchema } from '../utils/graphQLQuerySchema';

export default function fetchDataQuery(url, value) {
  const parameterQuery = value;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CharacterSchema(parameterQuery),
    }),
  });
}

export function fetchAutoSuggestionQuery(url, value) {
  const parameterQuery = value;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: AutoSuggestionCharacterSchema(parameterQuery),
    }),
  });
}
