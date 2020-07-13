import React, { useState } from 'react';

import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const ContactData = props => {

    const [ orderForm, setOrderForm ] = useState({
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest'},
                        { value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true,
            },
});

    const [ formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (event) => {
        //stops the page to send a request/reload
        event.preventDefault();
       
        const formData = {};

        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }

        //need to say .json for firebase

        //YOU SHOULD RECALCULATE PRICE ON THE SERVER
        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            userId: props.userId,
        }
        
        console.log("CONTACT DATA userId = " + order['userId'])

        props.onBurgerOrder(order, props.token);
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier] 
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifiers in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid;
        }

       setOrderForm(updatedOrderForm);
       setFormIsValid(formIsValid);
    }

    const checkValidity = (value, rules) => {

        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        /*if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }*/

        return isValid;
    }

        const formElementsArray = [];

        for (let key in orderForm) {
            formElementsArray.push({
                id: key,
                config: orderForm[key],
            });
        }

        let form = (
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                     key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig={formElement.config.elementConfig}
                     value={formElement.config.value}
                     invalid={!formElement.config.valid}
                     shouldValidate={formElement.config.validation}
                     touched={formElement.config.touched}
                     changed={(event) => inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
            </form>
    );
        if (props.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact data below</h4>
                {form}
            </div>
        )
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBurgerOrder: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));