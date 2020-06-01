import React, { Component } from 'react';
import {
  Radio, FormControlLabel, Grid, RadioGroup, FormControl,
} from '@material-ui/core';
import { GridContainer, H4 } from './style';

class Filter extends Component {
    selectedOption = '';
    handleChange = (event) => {
      this.selectedOption = event.target.value;
      this.props.addFilter(event.target.value, event.target.name);
    }
    removeFilterHandler = () =>{
        this.selectedOption = '';
    }

    render() {
      const { key, value } = this.props.filterResponse;
      return (
        <GridContainer className="filter-wrapper">
          <Grid container item xs={12} sm={12}>
            <H4>{key}</H4>
            <FormControl>
              <RadioGroup aria-label={key} name={key} value={this.selectedOption} onChange={this.handleChange}>
                {value.map((item, index) => (
                  <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </GridContainer>
      );
    }
}

export default Filter;
