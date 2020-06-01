import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import formatDate from '../../utils/helpers';
import * as S from './style';

const SingleCharacter = (props) => {
  const {
    id, name, image, status, species, gender, created, location, origin,
  } = props.characerList;
  return (
    <Grid item xs={6} sm={4} md={3}>
      <S.WrapperContainer>
        <S.CardHeader>
          <S.Avatar style={{ backgroundImage: `url(${image})` }} />
          <S.CardHeaderdetails>
            <S.H3>{name}</S.H3>
            <S.Span>
              id:
              {' '}
              {id}
              {' - '}
              created
              {' '}
              {formatDate(created)}
            </S.Span>
          </S.CardHeaderdetails>
        </S.CardHeader>
        <S.CardContent>
          <S.CardContentUL>
            <S.CardContentLI>
              <S.CardContentSpanLeft>
                Status
              </S.CardContentSpanLeft>
              <S.CardContentSpanRight>
                {status}
              </S.CardContentSpanRight>
            </S.CardContentLI>
            <S.CardContentLI>
              <S.CardContentSpanLeft>
                Species
              </S.CardContentSpanLeft>
              <S.CardContentSpanRight>
                {species}
              </S.CardContentSpanRight>
            </S.CardContentLI>
            <S.CardContentLI>
              <S.CardContentSpanLeft>
                Gender
              </S.CardContentSpanLeft>
              <S.CardContentSpanRight>
                {gender}
              </S.CardContentSpanRight>
            </S.CardContentLI>
            <S.CardContentLI>
              <S.CardContentSpanLeft>
                Origin
              </S.CardContentSpanLeft>
              <S.CardContentSpanRight>
                {origin.name}
              </S.CardContentSpanRight>
            </S.CardContentLI>
            <S.CardContentLI>
              <S.CardContentSpanLeft>
                Last Location
              </S.CardContentSpanLeft>
              <S.CardContentSpanRight>
                {location.name}
              </S.CardContentSpanRight>
            </S.CardContentLI>
          </S.CardContentUL>
        </S.CardContent>
      </S.WrapperContainer>
    </Grid>
  );
};
SingleCharacter.propTypes = {
  characerList: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    created: PropTypes.string,
    location: PropTypes.object,
    origin: PropTypes.object,
  }),
};
export default SingleCharacter;
