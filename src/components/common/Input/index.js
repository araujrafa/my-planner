import React from 'react';

export default (props) => (
  <div className={props.classContainer || ''}>
    <label className={props.classLabel || ''}>
      {props.label || ''}
    </label>
    <input 
      className={props.classInput || ''}
      name={props.name || ''}
      onChange={props.onChange || ''}
      onKeyPress={props.onKeyPress || ''}
      value={props.value || ''}
      type={props.type || 'text'}
    />
  </div>
)

