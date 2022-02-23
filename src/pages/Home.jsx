import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, Sort } from '../components';

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

    console.log('--------', cartItems)

    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, []);


    const [activeCategory, setActiveCategory] = React.useState(null)
    const [activeSortType, setActiveSortType] = React.useState(0)

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    }

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        categories={categories}
                    />
                </div>
                <Sort
                    activeSortType={activeSortType}
                    setActiveSortType={setActiveSortType}
                    sortTypes={sortTypes}
                />
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