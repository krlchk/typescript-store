import { Link } from "react-router-dom";
import { BasketIcon } from "../assets";
import { useShoppingCart } from "../context/shopping-cart-context";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="sticky flex p-7 text-3xl font-semibold shadow-lg">
      <div className="me-auto flex gap-10">
        <Link className="transition-colors hover:text-black/50" to="/">
          Home
        </Link>
        <Link className="transition-colors hover:text-black/50" to="/store">
          Store
        </Link>
        <Link className="transition-colors hover:text-black/50" to="/about">
          About
        </Link>
      </div>
      {cartQuantity > 0 && (
        <button onClick={openCart} className="relative">
          <BasketIcon />
          <div className="absolute flex h-5 w-5 -translate-y-3 translate-x-6 items-center justify-center rounded-full bg-red-500 text-base text-white">
            {cartQuantity}
          </div>
        </button>
      )}
    </div>
  );
}
