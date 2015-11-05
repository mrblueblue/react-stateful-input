import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';

const Input = ({className, placeholder, updateValue}) => (
  <input type='text'
    className={className}
    placeholder={placeholder}
    onChange={updateValue}
  />
);

const StatefulInput = compose(
  withState('value', 'setValue', ''),
  mapProps(({setValue, ...rest}) => ({
    updateValue: (event) => setValue(() => event.target.value),
    clearValue: () => setValue(() => ''),
    ...rest
  }))
)(Input);

export default StatefulInput;
