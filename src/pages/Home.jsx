import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock } from '../components';

import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortTypes = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const { cartItems } = useSelector(({ cart }) => cart);
    const [activeCategory, setActiveCategory] = React.useState(null)

    React.useEffect(() => {
        dispatch(fetchPizzas(activeCategory));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    }

    const setActiveCategoryAndFetch = (index) => {
        setActiveCategory(index)
        dispatch(fetchPizzas(index))
    }

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategoryAndFetch}
                        categories={categories}
                    />
                </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map(pizza => {
                    return <PizzaBlock
                        {...pizza}
                        onClickAddPizza={handleAddPizzaToCart}
                        addedCount={cartItems[pizza.id] && cartItems[pizza.id].totalItemCount}
                        key={`${pizza.id}_${pizza.name}`}
                    />
                })}
            </div>
        </div>
    )
}

export default Home;