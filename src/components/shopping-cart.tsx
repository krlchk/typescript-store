import { useEffect } from "react";
import { useShoppingCart } from "../context/shopping-cart-context";
import { CartItem } from "./cart-item";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities";

type ShoppingCart = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCart) {
  const { closeCart, cartItems } = useShoppingCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={closeCart}
      className={
        isOpen
          ? "overscroll-y-hidden absolute inset-0 h-[100vh] w-full bg-black/40 backdrop-blur-sm"
          : "hidden"
      }
    >
      <div
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        className="absolute right-0 flex h-[100vh] w-1/2 flex-col bg-white p-5"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Cart</h1>
          <button
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#8b8b8b] bg-[#8b8b8b] py-1 font-bold text-white transition-colors hover:border-[#8b8b8b] hover:bg-white hover:text-[#8b8b8b]"
          >
            X
          </button>
        </div>
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <h1 className="flex self-end text-2xl font-semibold">
          Total:
          <span className="ml-3 text-green-700">
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </span>
        </h1>
      </div>
    </div>
  );
}
