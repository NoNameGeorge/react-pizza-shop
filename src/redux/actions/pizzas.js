export const fetchPizzas = (category) => (dispatch) => {
  fetch(`http://localhost:3001/pizzas${category !== null ? `?id=${category}` : ''}`)
    .then(response => response.json())
    .then(data => dispatch(setPizzas(data)))
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
