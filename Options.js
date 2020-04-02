import React from 'react'
import Option from './Option'

const Options = props => (
  <div>
    <button onClick={props.handleDelete}>Remove All</button>
    {props.options.length === 0 && <p> Add option to get Started</p>}
    {
       props.options.map(option => (
      <Option 
      key={option} 
      optionText={option} 
      handleDeletOp={props.handleDeletOp}
        />
    ))}
  </div>
);
  export default Options