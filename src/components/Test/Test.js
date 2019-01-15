import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './Test.css';

const layout = (props) => (
    <Aux>
        <div className='main-wrapper'>
            <div className='left'>
                <div className='top-left' >option 1</div>
                <div className='bottom-left' >option 3</div>
            </div>
            <div>
                <div className="middle"></div>
            </div>
            <div className='right'>
                <div className='top-right' >option 2</div>
                <div className='bottom-right' >option 4</div>
            </div>
        </div>
    </Aux>
);

export default layout;