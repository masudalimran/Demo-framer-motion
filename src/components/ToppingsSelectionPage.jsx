import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariant, listItemVariant } from "../utils/motionVariants";

const ToppingsSelectionPage = ({
  setCurrentPage,
  selectionObj,
  setSelectionObj,
}) => {
  const toppingsArr = [
    "Mushrooms",
    "Peppers",
    "Onions",
    "Olives",
    "Extra Cheese",
    "Tomatoes",
    "Chicken",
  ];
  const [selectedToppingsArr, setSelectedToppingsArr] = useState([]);
  const handleAddToppings = (index) => {
    let arr = [...selectedToppingsArr];
    if (arr.includes(index)) arr = arr.filter((b) => b !== index);
    else arr.push(index);
    setSelectedToppingsArr(arr);
  };

  useEffect(() => {
    let obj = { ...selectionObj };
    obj.toppings = selectedToppingsArr;
    setSelectionObj(obj);
  }, [selectedToppingsArr]);
  return (
    <>
      <h4>Step 2: Choose Toppings</h4>
      <hr />
      <div className="app__content-selection">
        <ul>
          {toppingsArr.map((toppings) => (
            <motion.li
              variants={listItemVariant}
              animate="show"
              whileHover="hover"
              onClick={() => handleAddToppings(toppings)}
            >
              {toppings} {selectedToppingsArr.includes(toppings) && " ☑️ "}
            </motion.li>
          ))}
        </ul>
      </div>
      {selectedToppingsArr.length > 0 ? (
        <motion.button
          variants={buttonVariant}
          initial="hidden"
          animate="show"
          type="button"
          onClick={() => setCurrentPage("place-order")}
          className={
            selectedToppingsArr.length < 1
              ? "app__content-btn-disabled"
              : "app__content-btn"
          }
          disabled={selectedToppingsArr.length < 1}
        >
          Place Order
        </motion.button>
      ) : (
        <div className="app__content-btn-disabled" />
      )}
    </>
  );
};

export default ToppingsSelectionPage;
