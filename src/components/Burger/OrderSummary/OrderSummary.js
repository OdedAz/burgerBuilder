import React from 'react';

import Auxy from '../../../hoc/Auxy';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span>
            </li>);
        })

    return (
        <Auxy>
            <h3>Your order</h3>
            <p>A selicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to check out</p>
        </Auxy>
    );
};

export default orderSummary;