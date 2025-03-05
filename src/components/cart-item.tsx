import { useShoppingCart } from "../context/shopping-cart-context";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-[100px] object-cover"
            src={item.imgsUrl}
            alt="img"
          />
          <div className="ml-3 flex flex-col gap-4">
            <div className="flex items-center">
              <p className="order-2 text-lg text-[#8b8b8b]">x{quantity}</p>
              <h1 className="w-1/2 text-lg font-semibold">{item.name}</h1>
            </div>
            <p className="text-base font-bold text-gray-500">
              {formatCurrency(item.price)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <p>{formatCurrency(parseInt((quantity * item.price).toFixed(2)))}</p>
          <button
            onClick={() => removeFromCart(id)}
            className="h-10 w-10 rounded-md border-2 border-red-500 bg-red-500 py-1 font-bold text-white transition-colors hover:border-red-500 hover:bg-white hover:text-red-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
