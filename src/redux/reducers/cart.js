const initialState = {
    "cartItems": {
        "0-26-Пепперони Фреш с перцем": {
            "name": "Пепперони Фреш с перцем",
            "image": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "price": 803,
            "type": 0,
            "size": 26,
            "count": 2
        },
        "1-26-Пепперони Фреш с перцем": {
            "name": "Пепперони Фреш с перцем",
            "image": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "price": 803,
            "type": 1,
            "size": 26,
            "count": 2
        },
        "1-40-Пепперони Фреш с перцем": {
            "name": "Пепперони Фреш с перцем",
            "image": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "price": 803,
            "type": 1,
            "size": 40,
            "count": 2
        },
        "0-26-Сырная": {
            "name": "Сырная",
            "image": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "price": 245,
            "type": 0,
            "size": 26,
            "count": 2
        }
    },
    "totalPrice": 5308,
    "totalCount": 8
}

const addItemToState = (state, action) => {
    const obj = {}
    const name = `${action.type}-${action.size}-${action.name}`

    if (state[name]) {
        obj[name] = state[name]
        obj[name].count++
    } else {
        obj[name] = {
            name: action.name,
            image: action.image,
            price: action.price,
            type: action.type,
            size: action.size,
            count: 1
        }
    }

    return obj
}

const addItems = (state, action) => {
    const obj = {}

    obj[action] = { ...state[action] }
    obj[action].count++

    return obj
}

const removeItems = (state, action) => {
    const obj = {}

    obj[action] = { ...state[action] }
    obj[action].count--

    return obj
}

const deleteItems = (state, action) => {
    const obj = { ...state }

    delete obj[action]

    return obj
}

const getSum = (state) => {
    let sum = 0

    Object.keys(state).forEach(key => {
        if (state[key]) {
            sum += state[key].count * state[key].price
        }
    })

    return sum
}

const getCount = (state) => {
    let sum = 0

    Object.keys(state).forEach(key => {
        if (state[key]) {
            sum += state[key].count
        }
    })

    return sum
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            let newItems = { ...state.cartItems, ...addItemToState(state.cartItems, action.payload) }
            return {
                ...state,
                cartItems: newItems,
                totalPrice: getSum(newItems),
                totalCount: getCount(newItems)
            }
        }

        case "DELETE_ITEM": {
            let newItems = deleteItems(state.cartItems, action.payload)

            deleteItems(state.cartItems, action.payload)
            return {
                ...state,
                cartItems: newItems,
                totalPrice: getSum(newItems),
                totalCount: getCount(newItems)
            }
        }

        case "ADD_ITEM": {
            let newItems = { ...state.cartItems, ...addItems(state.cartItems, action.payload) }
            return {
                ...state,
                cartItems: newItems,
                totalPrice: getSum(newItems),
                totalCount: getCount(newItems)
            }
        }

        case "MINUS_ITEM": {
            let newItems = { ...state.cartItems, ...removeItems(state.cartItems, action.payload) }
            return {
                ...state,
                cartItems: newItems,
                totalPrice: getSum(newItems),
                totalCount: getCount(newItems)
            }
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