import React from 'react';

function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <ul>
            <li 
                className={activeCategory === null ? 'active' : ''}
                onClick={() => setActiveCategory(null)}>
                Все
            </li>
            {categories && categories.map((category, index) => {
                return <li 
                    key={`${category}-${index}`}
                    className={index === activeCategory ? 'active' : ''}
                    onClick={() => setActiveCategory(index)}>
                    {category}
                </li>
            })}
        </ul>
    )
}

export default Categories