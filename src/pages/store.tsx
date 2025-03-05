import { StoreItem } from "../components";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <div className="p-5">
      <h1 className="mb-10 text-4xl font-bold">Store</h1>
      <div className="tablet:grid-cols-2 mobile:grid-cols-1 grid grid-cols-3 gap-10">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
