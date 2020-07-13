//only sync action creators for building the burger

import * as ActionTypes from './ActionTypes';
import { actionChannel } from 'redux-saga/effects';

export const addIngredient = (name) => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: ActionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: ActionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return {
       type: ActionTypes.INIT_INGREDIENTS,
    };
};