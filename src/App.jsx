import { useReducer, useEffect } from "react";
import {
  randomId,
  formatCurrency,
  updateLocalStorageItem,
  getLocalStorageItem,
} from "./utils";
import Form from "./components/Form";
import ShopList from "./components/ShopList";
import "./index.css";

const initialState = getLocalStorageItem("shoplist") || [];

function reducer(state, action) {
  switch (action.type) {
    case "add_item":
      return [...state, { id: randomId(5), ...action.newItem }];
    case "delete_item":
      return state.filter(({ id }) => action.id !== id);
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (newItem) => dispatch({ type: "add_item", newItem });
  const deleteItem = (id) => dispatch({ type: "delete_item", id });

  const total = formatCurrency(
    state.reduce((acc, { price, amount }) => price * amount + acc, 0)
  );

  useEffect(() => {
    updateLocalStorageItem("shoplist", state);
    console.log("render");
  });

  return (
    <div className="w-screen min-h-screen bg-emerald-300 text-xl pt-8 pb-[212px]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-thin text-5xl text-center mb-8">ShopList</h1>
        <ShopList shoplist={state} deleteItem={deleteItem} />
      </div>
      <div className="fixed left-0 right-0 bottom-0 bg-white">
        <Form addItem={addItem} total={total} />
      </div>
    </div>
  );
}

export default App;
