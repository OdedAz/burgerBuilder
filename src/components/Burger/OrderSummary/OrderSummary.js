import React from 'react';

import Auxy from '../../../hoc/Auxy';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total amount: {props.totalPrice}</strong></p>
            <p>Continue to check out</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxy>
    );
};

export default orderSummary;