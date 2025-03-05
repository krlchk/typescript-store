import { useShoppingCart } from "../context/shopping-cart-context";
import { formatCurrency } from "../utilities";

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgsUrl: string;
};

export function StoreItem({ id, name, price, imgsUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-black p-5 transition-transform">
      <img className="h-[200px] object-cover" src={imgsUrl} alt="img" />
      <div className="mb-5 flex w-full justify-between">
        <h3 className="w-1/2 text-lg font-semibold">{name}</h3>
        <p className="text-xl font-bold text-gray-500">
          ${formatCurrency(price)}
        </p>
      </div>
      {quantity === 0 ? (
        <button
        onClick={()=>increaseItemQuantity(id)}
        className="w-full rounded-md border-2 border-blue-500 bg-blue-500 py-1 font-bold text-white transition-colors hover:border-blue-500 hover:bg-white hover:text-blue-500">
          + Add new item
        </button>
      ) : (
        <div className="flex w-2/3 flex-col gap-2">
          <div className="flex justify-between gap-3">
            <button
        onClick={()=>decreaseItemQuantity(id)} className="aspect-square w-1/6 rounded-md border-2 border-blue-500 bg-blue-500 py-1 font-bold text-white transition-colors hover:border-blue-500 hover:bg-white hover:text-blue-500">
              -
            </button>
            <p className="text-xl font-semibold">{quantity} in cart</p>
            <button
        onClick={()=>increaseItemQuantity(id)} className="aspect-square w-1/6 rounded-md border-2 border-blue-500 bg-blue-500 py-1 font-bold text-white transition-colors hover:border-blue-500 hover:bg-white hover:text-blue-500">
              +
            </button>
          </div>
          <button
        onClick={()=>removeFromCart(id)} className="w-full rounded-md border-2 border-red-500 bg-red-500 py-1 font-bold text-white transition-colors hover:border-red-500 hover:bg-white hover:text-red-500">
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
