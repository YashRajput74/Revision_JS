export const initialCartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
}

export function CartReducer(state, action) {
    switch (action.type) {
        case "Add_item":
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);
            let updatedItems;
            if (existingItem) {
                updatedItems = state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                updatedItems = [
                    state.items,
                    { ...product, quantity: 1 }
                ]
            }
            return {
                items: updatedItems,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price
            }
        default:
            return state;
    }
}