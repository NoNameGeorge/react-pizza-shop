import React from "react";
import { Button } from ".";

const pizzaTypes = ["тонкое", "традиционное"]
const pizzaSizes = [26, 30, 40]

function PizzaBlock({ id, name, imageUrl, types, sizes, price, onClickAddPizza, addedCount }) {

    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(sizes[0])

    return (
        <div className="pizza-block">
            <img className="pizza-block__image"
                src={imageUrl}
                alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {pizzaTypes.map((pizzaType, index) => {
                        return <li 
                            key={`${pizzaType}_${name}`}
                            className={`${index === activeType ? 'active' : ''} 
                                        ${!types.includes(index) ? 'disabled' : ''}`}
                            onClick={() => setActiveType(index)}
                            >{pizzaType}
                        </li>
                    })}
                </ul>
                <ul>
                    {pizzaSizes.map((pizzaSize) => {
                        return <li 
                            key={`${pizzaSize}_${name}`}
                            className={`${pizzaSize === activeSize ? 'active' : ''} 
                                        ${!sizes.includes(pizzaSize) ? 'disabled' : ''}`}
                            onClick={() => setActiveSize(pizzaSize)}
                            >{pizzaSize} см.
                        </li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button
                    outline
                    className="button--add"
                    onClick={() => onClickAddPizza({
                        id, 
                        name, 
                        price, 
                        size: activeSize, 
                        type: activeType, 
                        typeName: pizzaTypes[activeType],
                        image: imageUrl   
                    })}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white" />
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    )
}

export default PizzaBlock