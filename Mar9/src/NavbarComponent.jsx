import { useState } from "react"
import useEvent from './useEvent'
export default function NavbarComponent() {
    const [cartCount, setCartCount] = useState(0);
    useEvent("CART_UPDATED",(count)=>setCartCount(count));
    return (
        <div>
            Cart: {cartCount}
        </div>
    )
}