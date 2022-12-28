import { motion, AnimatePresence } from "framer-motion";
import { formatCurrency } from "../utils";
import DeleteButton from "./DeleteButton";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1 },
  exit: { scale: 0.6, opacity: 0 },
};

export default function ShopList({ shoplist, deleteItem }) {
  return (
    <AnimatePresence mode="wait">
      {shoplist.length > 0 ? (
        <motion.ul
          key="list"
          initial="hidden"
          animate="show"
          exit={itemVariants.exit}
          variants={listVariants}
          className="space-y-1 rounded-xl tablet:mx-4"
        >
          <AnimatePresence mode="popLayout">
            {shoplist.map(({ id, item, amount, price }) => (
              <motion.li
                key={id}
                layout
                variants={itemVariants}
                exit={itemVariants.exit}
                transition={{ type: "spring" }}
                className="flex items-center p-4 gap-4 bg-white even:bg-emerald-50 first:rounded-t-xl last:rounded-b-xl transition-colors duration-300"
              >
                <div className="flex-1 grid grid-cols-2 gap-2">
                  {/* item name */}
                  <div className="col-span-2 font-semibold truncate first-letter:uppercase">
                    <span title="Nome do item">{item}</span>
                  </div>
                  {/* amount */}
                  <div>
                    <span
                      title={
                        amount > 1 ? "Valor vezes quantidade" : "Quantidade"
                      }
                    >
                      {amount > 1 ? formatCurrency(price) : ""} x {amount}
                    </span>
                  </div>
                  {/* total value */}
                  <div className="font-semibold truncate">
                    <span title="Valor">
                      {amount > 1
                        ? formatCurrency(price * amount)
                        : formatCurrency(price)}
                    </span>
                  </div>
                </div>
                <div>
                  <DeleteButton onClick={() => deleteItem(id)} />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <motion.div
          key="advice"
          initial="hidden"
          animate="show"
          exit={itemVariants.exit}
          variants={itemVariants}
          className="bg-white rounded-xl tablet:mx-4"
        >
          <h3 className="text-3xl text-center py-4">Lista vazia</h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
