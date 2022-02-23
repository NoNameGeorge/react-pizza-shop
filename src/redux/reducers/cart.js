const initialState = {
    cartItems: {
        0: {
            totalItemCount: 1,
        }
    },
    totalPrice: 0,
    totalCount: 0
}

const addItemToState = (state, action) => {
    console.log('----------------')
    // console.log(action.id, action)


    // state.cartItems.forEach(item => {
    //     console.log(item)
    //     if (action.id === item.id) {
    //         console.log('Уже есть в стате')
    //         item.totalItemCount += 1
    //     }
    // })

    const obj = {
        [action.id]: {
            totalItemCount: 1,
            name: action.name,
            types: {
                [action.type]: {
                    count: 0,

                }
            }
        }
    }


    console.log(state.cartItems)

    return {...state.cartItems, ...obj}
}

const getSum = (state, action, name) => state[name] + action.price
const getCount = (state, name) => state[name] + 1

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            return {
                ...state,
                cartItems: addItemToState(state, action.payload),
                totalPrice: getSum(state, action.payload, 'totalPrice'),
                totalCount: getCount(state, 'totalCount')
            }

        default:
            return state;
    }
}

export default cart