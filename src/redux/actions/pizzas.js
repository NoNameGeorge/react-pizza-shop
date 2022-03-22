export const fetchPizzas = (category) => (dispatch) => {
  fetch(`https://my-json-server.typicode.com/NoNameGeorge/react-pizza-shop-JSON/pizzas${category !== null ? `?category=${category}` : ''}`)
    .then(response => response.json())
    .then(data => dispatch(setPizzas(data)))
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
