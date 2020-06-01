import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import * as S from './style';

class SelectedFilters extends Component {
    handleClick = (key) => {
      let referenceFilter = key;
      if (referenceFilter.includes('Species')) referenceFilter = 'speciesRef';
      else if (referenceFilter.includes('Gender')) referenceFilter = 'genderRef';
      this.props.removeFilter(key, referenceFilter);
    }

    render() {
      if (this.props.selectedFilters.selectedSpeciesFilter == null
            && this.props.selectedFilters.selectedGenderFilter == null
      ) {
        return false;
      }
      return (
        <div className="selected-filter-wrapper">
          <S.SelectedFilterHeading>Selected Filters</S.SelectedFilterHeading>
          <S.SelectedFilterUL>
            {Object.keys(this.props.selectedFilters).map(key => (
              (this.props.selectedFilters[key] !== null)
                ? (
                  <S.SelectedFilterLi key={key} index={key}>
                    {this.props.selectedFilters[key]}
                    <S.SPAN>
                      <CloseIcon style={{ fontSize: 20 }} onClick={() => this.handleClick(key, this.props.selectedFilters[key])} />
                    </S.SPAN>
                  </S.SelectedFilterLi>
                )
                : ''
            ))}
          </S.SelectedFilterUL>
        </div>
      );
    }
}

export default SelectedFilters;
