export const fetchPizzas = (sortBy, category) => (dispatch) => {
    fetch("http://localhost:3001/pizzas")
        .then(response => response.json())
        .then(data => dispatch(setPizzas(data)))
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
