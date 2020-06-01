function makeFilter(filtersObject) {
  const filterString = {};
  Object.keys(filtersObject).map((key) => {
    if (typeof filtersObject[key] === 'object') {
      // eslint-disable-next-line no-restricted-syntax
      for (const innerkey in filtersObject[key]) {
        if (filtersObject[key][innerkey] !== null) {
          if (innerkey.includes('Species')) filterString.species = filtersObject[key][innerkey];
          else if (innerkey.includes('Gender')) filterString.gender = filtersObject[key][innerkey];
        }
      }
    } else if (filtersObject[key] !== null) {
      filterString.name = filtersObject[key];
    }
  });
  return Object.keys(filterString).length ? filterString : '';
}

function convertObjectToParsing(object) {
  const json = JSON.stringify(object);
  return json.replace(/"([^"]+)":/g, '$1:');
}
export default function CharacterSchema(val) {
  let filterQuery = makeFilter(val);
  if (filterQuery !== '') {
    filterQuery = `(filter:${JSON.stringify(filterQuery)})`;
    filterQuery = filterQuery.replace('"species"', 'species');
    filterQuery = filterQuery.replace('"gender"', 'gender');
    filterQuery = filterQuery.replace('"name"', 'name');
  } else {
    filterQuery = '(filter: {})';
  }
  console.log(filterQuery);
  const CharacterSchemaQ = `query {
        characters${filterQuery} {
            results {
                id
                name
                image
                status
                species
                gender
                location{
                    name
                }
                created
                origin{
                    name
                }
            }
        }
    }`;
  return CharacterSchemaQ;
}
export function AutoSuggestionCharacterSchema(val) {
  // const filterQuery = `(filter:{name: ${JSON.stringify(val)}})`;
  const filterQuery = `(filter: ${JSON.stringify(val)})`;
  const AutoSuggestionCharacterSchema = `query {
    characterNamesSearch${filterQuery} {
        results {
            name
        }
    }
}`;
  return AutoSuggestionCharacterSchema;
}
