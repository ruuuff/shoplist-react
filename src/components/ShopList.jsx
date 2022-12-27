import { formatCurrency } from "../utils";
import DeleteButton from "./DeleteButton";

export default function ShopList({ shoplist, deleteItem }) {
  return shoplist.length > 0 ? (
    <ul className="bg-white rounded-xl tablet:mx-4">
      {shoplist.map(({ id, item, amount, price }) => {
        const priceBRL = formatCurrency(price);
        const totalPriceBRL = formatCurrency(price * amount);
        return (
          <li
            key={id}
            className="flex gap-4 items-center p-4 border-t-4 border-t-emerald-300 first:border-none"
          >
            <div className="grid grid-cols-2 gap-2 flex-1">
              {/* item name */}
              <div className="col-span-2 font-semibold truncate first-letter:uppercase">
                {item}
              </div>
              {/* amount */}
              <div>
                {amount > 1 ? priceBRL : ""} x {amount}
              </div>
              {/* total value */}
              <div className="font-semibold">
                {amount > 1 ? totalPriceBRL : priceBRL}
              </div>
            </div>
            <div>
              <DeleteButton onClick={() => deleteItem(id)} />
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="bg-white rounded-xl tablet:mx-4">
      <h3 className="text-3xl text-center py-4">Lista vazia</h3>
    </div>
  );
}
