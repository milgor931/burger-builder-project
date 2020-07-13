import * as ActionTypes from './ActionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_FAIL,
        error: error,
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: ActionTypes.PURCHASE_BURGER_START
    }
}

//async action
export const purchaseBurger = (orderData, token) => {
    return {
        type: ActionTypes.PURCHASE_BURGER,
        orderData: orderData,
        token: token,
    };
};

export const purchaseInit = () => {
    return {
        type: ActionTypes.PURCHASE_INIT,
    }
};


export const fetchOrdersSuccess = (orders) => {
    return {
        type: ActionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders,
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: ActionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: ActionTypes.FETCH_ORDERS_START,
    }
}

export const fetchOrders = (token, userId) => {
    return {
       type: ActionTypes.FETCH_ORDERS,
       token: token,
       userId: userId,
    }
}