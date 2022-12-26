import { formatCurrency } from "../utils";
import DeleteButton from "./DeleteButton";

export default function ShopList({ shoplist, deleteItem }) {
  return (
    <ul className="bg-white w-11/12 mx-auto rounded-md">
      {shoplist.length > 0 ? (
        shoplist.map(({ id, item, amount, price }) => {
          const priceBRL = formatCurrency(price);
          const totalPriceBRL = formatCurrency(price * amount);

          return (
            <li
              key={id}
              className="flex items-center px-2 py-2 border border-t-gray-400 first:border-none"
            >
              <div className="grid grid-cols-[55%,15%,30%] w-full overflow-hidden items-center">
                <span className="capitalize font-semibold">
                  {item} {amount > 1 ? `(${priceBRL})` : ""}
                </span>
                <span>x {amount}</span>
                <span className="font-semibold">
                  {amount > 1 ? totalPriceBRL : priceBRL}
                </span>
              </div>

              <DeleteButton onClick={() => deleteItem(id)} />
            </li>
          );
        })
      ) : (
        <h3 className="text-3xl text-center font-semibold py-2">Lista vazia</h3>
      )}
    </ul>
  );
}
