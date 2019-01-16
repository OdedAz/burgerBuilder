import React, { Component } from 'react';

import Auxy from '../../hoc/Auxy';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    bacon: 1,
    cheese: 1,
    meat: 1
};
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 2,
        purchasable: false,
        purchasing: false
    };
    
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0 });
    }

    addIngredientHandler = (Type) => {
        const oldCount = this.state.ingredients[Type];
        const updatedCount = oldCount + 1;
        const updateIngredient = {
           ...this.state.ingredients
        };
        updateIngredient[Type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[Type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredient});
        this.updatePurchaseState(updateIngredient);
    }

    removeIngredientHandler = (Type) => {
        const oldCount = this.state.ingredients[Type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredient = {
           ...this.state.ingredients
        };
        updateIngredient[Type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[Type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredient});
        this.updatePurchaseState(updateIngredient);
    }

    purchasHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    PurchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxy>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseContinued={this.PurchaseContinueHandler}
                    purchaseCancelled={this.purchaseCancelHandler}
                    totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients}
                    totalPrice={this.totalPrice} />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice} 
                    ordered = {this.purchasHandler}/>
            </Auxy>
        );
    }
}

export default BurgerBuilder;