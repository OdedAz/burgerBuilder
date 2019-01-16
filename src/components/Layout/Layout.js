import React from 'react';

import classes from './Layout.css';

import Auxy from '../../hoc/Auxy';
import Toolbar from '../Navigation/Toolbar/Toolbar';



const layout = (props) => (
    <Auxy>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Auxy>
);

export default layout;