import React from "react";

function Button({ onClick, children, outline, className }) {
    return (
        <button
            onClick={onClick}
            className={`${className} ${outline ? 'button button--outline' : 'button'}`}
        >
            {children}
        </button>
    )
}

export default Button