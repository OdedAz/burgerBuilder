import React from 'react';

import './NavigationItem.css'

const navigationItem = (props) => (
    <li className={props.active ? "NavigationItem" : null}>
        <a 
        href={props.link}
        className={props.active ? "active" : null}>{props.children}</a>
    </li>
);

export default navigationItem;