import { createContext, useContext, useEffect,useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("tvacha-cart")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("tvacha-cart",JSON.stringify(cart));
    },[cart]);

    const addToCart = (product, qty = 1) => {
        setCart((prev) => {
            const found = prev.find((item) => item.id === product.id);
            if(found) {
                return prev.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty + qty} : item
                );
            }
            return [...prev, {...product,qty}]
        });
    };

    const updateQty = (id,qty) => {
        if(qty < 1) removeFromCart(id);
        setCart((prev) => prev.map((item) => (item.id === id ? {...item, qty } : item)));
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum,item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum,item) => sum + item.price * item.qty, 0);


    return(
        <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart,
            clearCart, totalItems,totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);