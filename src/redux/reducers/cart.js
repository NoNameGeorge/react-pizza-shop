const initialState = {
    "cartItems": {},
    "totalPrice": 0,
    "totalCount": 0
}

const addItemToState = (state, action) => {
    if (state.cartItems[action.id]) {
        const newObj = JSON.parse(JSON.stringify(state.cartItems[action.id]))
        newObj.totalItemCount += 1

        if (newObj.types[action.type] && state.cartItems[action.id].types[action.type]) {
            if (newObj.types[action.type][action.size] && state.cartItems[action.id].types[action.type][action.size]) {
                newObj.types[action.type][action.size].count += 1
            } else {
                newObj.types[action.type] = { ...newObj.types[action.type], [action.size]: { type: action.typeName, count: 1 } }
            }
        } else {
            newObj.types = { ...newObj.types,  [action.type]: { [action.size]: { type: action.typeName, count: 1 }}}
        }
        
        return {...state.cartItems, ...{[action.id]: newObj}}
    }

    const obj = {
        [action.id]: {
            totalItemCount: 1,
            name: action.name,
            price: action.price,
            image: action.image,
            types: {
                [action.type]: {
                    [action.size]: {
                        type: action.typeName, 
                        count: 1,
                    }
                }
            }
        }
    }

    return {...state.cartItems, ...obj}
}

const getSum = (state, action, name) => state[name] + action.price
const getCount = (state, name) => state[name] + 1

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART":
            return {
                ...state,
                cartItems: addItemToState(state, action.payload),
                totalPrice: getSum(state, action.payload, 'totalPrice'),
                totalCount: getCount(state, 'totalCount')
            }

        case "REMOVE_CART":
            return {
                totalPrice: 0,
                totalCount: 0,
                cartItems: {}
            }


        default:
            return state;
    }
}

export default cart