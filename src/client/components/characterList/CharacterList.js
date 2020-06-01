import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SingleCharacter from '../singleCharacter/SingleCharacter';
import NoResultFound from '../NoResultFound';

const CharcterList = (props) => {
  const { data } = props;
  if (data.characters === null) {
    return <NoResultFound />;
  }
  return (
    <Grid container spacing={1}>
      {Object.keys(data.characters.results).map(key => (
        <SingleCharacter
          key={key}
          index={key}
          characerList={data.characters.results[key]}
        />
      ))}
    </Grid>
  );
};
CharcterList.propTypes = {
  data: PropTypes.shape({
    characters: PropTypes.object,
  }),
};
export default CharcterList;
