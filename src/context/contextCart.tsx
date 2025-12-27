import ss_listInput from '@/config/ss_listInput';
import { IImage } from '@/swr/data/useImages';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';

export type ICartItem = {
    id: number
    name: string,
    product_id: number
    product_min_print: number
    category_id: number
    product_img: IImage[]
    list_inputs: string,
    count: number
}

// Interface cho Context
interface CartContextType {
    cartItems: ICartItem[];
    addToCart: (cart_item: ICartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseCount: (id: number) => void;
    decreaseCount: (id: number) => void;
    updateCount: (id: number, newCount: number) => void;
}

// Tạo Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState([] as ICartItem[]);

    // Load từ localStorage
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
    }, []);

    // Lưu vào localStorage mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newCartItem: ICartItem) => {
        const sameProductItems = cartItems.filter(x => x.product_id === newCartItem.product_id);

        // Nếu chưa có sản phẩm nào cùng product_id
        if (sameProductItems.length === 0) {
            setCartItems(prev => [...prev, newCartItem]);
            toast.success("Đã thêm vào giỏ hàng");
            return;
        }

        // Kiểm tra xem có item nào có cùng list_input không
        const isExist = sameProductItems.some(x => ss_listInput(x.list_inputs, newCartItem.list_inputs));

        if (isExist) {
            toast.error("Sản phẩm đã tồn tại");
            return;
        }

        toast.success("Đã thêm vào giỏ hàng");
        setCartItems(prev => [...prev, newCartItem]);
    };


    // Xoá hoàn toàn sản phẩm khỏi giỏ
    const removeFromCart = (id: number) => {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
    };

    // Tăng số lượng
    const increaseCount = (id: number) => {
        const index = cartItems.findIndex(x => x.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            updated[index].count += 1;
            setCartItems(updated);
        }
    };

    // Giảm số lượng, nếu còn 1 thì xoá
    const decreaseCount = (id: number) => {
        const index = cartItems.findIndex(x => x.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            if (updated[index].count > updated[index].product_min_print) {
                updated[index].count -= 1;
            } else {
                updated.splice(index, 1);
            }
            setCartItems(updated);
        }
    };
    const updateCount = (id: number, newCount: number) => {
        const index = cartItems.findIndex(x => x.id === id);
        if (index !== -1) {
            const updated = [...cartItems];
            if (newCount <= 0) {
                toast.error("Số lượng in > 0")
            } else {
                updated[index].count = newCount;
            }
            setCartItems(updated);
        }
    };

    // Xoá toàn bộ giỏ hàng
    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            increaseCount,
            decreaseCount,
            updateCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook truy cập giỏ hàng
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart phải được dùng bên trong <CartProvider>');
    }
    return context;
};
