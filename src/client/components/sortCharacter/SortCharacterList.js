import React, { Component } from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core';
import { SortWrapper } from './style';

class SortCharacterList extends Component {
    selectedValue = '';

    handleChange = (event) => {
      this.selectedValue = event.target.value;
      this.props.SortCharacterListFn(this.selectedValue);
    }

    render() {
      return (
        <SortWrapper id="select-wrapper">
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="sort-character-list">Sort by ID:</InputLabel>
            <Select
              native
              value={this.selectedValue}
              onChange={this.handleChange}
              inputProps={{
                name: 'sort',
                id: 'sort-character-list',
              }}
            >
              <option value="asc">Ascending</option>
              <option value="dec">Descending</option>
            </Select>
          </FormControl>
        </SortWrapper>
      );
    }
}

export default SortCharacterList;
