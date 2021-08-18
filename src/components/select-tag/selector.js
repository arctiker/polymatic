import React, { Fragment } from 'react';
import Select from 'react-select';


export default function Selector() {

const cars = [
  { value:'BMW', label: 'BMW'},
  { value:'AUDI', label: 'AUDI'},
  { value:'MERCEDES', label: 'MERCEDES'}
];

  return (
    <Fragment>
      <Select
        className='select-btn'
        defaultValue={cars[3]}
        isClearable
        isSearchable
        name="car"
        options={cars}
        getOptionValue={option => option['id']}
      />
    </Fragment>
  );
}