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
      price: Number(priceRef.current.value),
    });

    itemRef.current.value = "";
    amountRef.current.value = 1;
    priceRef.current.value = "";

    const devices =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobile = devices.test(navigator.userAgent);
    if (!isMobile) itemRef.current.focus();

    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 10);
  }

  useEffect(() => {
    amountRef.current.value = 1;
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} className="p-4 tablet:pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-12 gap-2 mb-4">
            <div className="col-span-7 small:col-span-6">
              <Input
                id="item"
                label="Item"
                reference={itemRef}
                placeholder="Nome do item"
              />
            </div>
            <div className="col-span-5 flex gap-2 small:col-span-6">
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
                type="number"
                reference={priceRef}
                placeholder="19.90"
                decimal
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="truncate">
              Total: <span className="font-semibold">{total}</span>
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
