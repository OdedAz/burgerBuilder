import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className = 'Label'>{props.Label}</div>
        <button className = 'Less' onClick={props.remove} disabled={props.disabled}>Less</button>
        <button className = 'More' onClick={props.added}>More</button>
    </div>
);

export default buildControl;