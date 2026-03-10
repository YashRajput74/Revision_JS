import eventBus from "./EventBus";

export default function CartComponent() {
    function updateCart() {
        const newCount = 3;
        eventBus.emit("CART_UPDATED", newCount);
    }
    return (
        <div>
            <button onClick={updateCart}>
                Add To Cart
            </button>
        </div>
    )
}