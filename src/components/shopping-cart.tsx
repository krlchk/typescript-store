import { useEffect } from "react";
import { useShoppingCart } from "../context/shopping-cart-context";

type ShoppingCart = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCart) {
  const { closeCart } = useShoppingCart();

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
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        closeCart();
      }}
      className={
        isOpen
          ? "overscroll-y-hidden absolute inset-0 h-[100vh] w-full bg-black/40 backdrop-blur-sm"
          : "hidden"
      }
    >
      <div className="absolute right-0 flex h-[100vh] w-1/2 flex-col bg-white p-5">
        <button
          onClick={closeCart}
          className="flex h-10 w-10 items-center justify-center self-end rounded-md border-2 border-[#8b8b8b] bg-[#8b8b8b] py-1 font-bold text-white transition-colors hover:border-[#8b8b8b] hover:bg-white hover:text-[#8b8b8b]"
        >
          X
        </button>
      </div>
    </div>
  );
}
