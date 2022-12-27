import { useRef, useEffect } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default function Form({ addItem, total }) {
  const itemRef = useRef("");
  const amountRef = useRef("");
  const priceRef = useRef("");

  function onSubmit(event) {
    event.preventDefault();

    addItem({
      item: itemRef.current.value,
      amount: Number(amountRef.current.value),
      price: Number(priceRef.current.value.replace(",", ".")),
    });

    itemRef.current.value = "";
    amountRef.current.value = 1;
    priceRef.current.value = "";
  }

  useEffect(() => {
    amountRef.current.value = 1;
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} className="p-4 tablet:pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-[55%,20%,25%] mb-4">
            <Input
              id="item"
              label="Item"
              reference={itemRef}
              placeholder="Nome do item"
              pr
            />
            <Input
              id="amount"
              label="Quantia"
              type="number"
              placeholder="1"
              reference={amountRef}
            />
            <Input
              id="price"
              label="Preço"
              reference={priceRef}
              placeholder="19.90"
              pl
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold">Total:</span> {total}
            </div>
            <div>
              <SubmitButton label="Novo Item" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
