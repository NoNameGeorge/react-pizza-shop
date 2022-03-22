export const addPizzaToCart = (items) => ({
    type:  'ADD_PIZZA_CART',
    payload: items 
})

export const addItem = (name) => ({
    type:  'ADD_ITEM',
    payload: name 
})

export const minusItem = (name) => ({
    type:  'MINUS_ITEM',
    payload: name 
})

export const removeItem = (name) => ({
    type:  'DELETE_ITEM',
    payload: name 
})