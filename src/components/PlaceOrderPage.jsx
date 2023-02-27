import React from "react";
import { motion } from "framer-motion";
import { headingVariant, horizontalRuleVariant } from "../utils/motionVariants";

const PlaceOrderPage = ({ setCurrentPage, selectionObj, setSelectionObj }) => {
  return (
    <div>
      <motion.h3 variants={horizontalRuleVariant}>
        Thank you for your order!
      </motion.h3>
      <motion.hr variants={horizontalRuleVariant} />
      <motion.div
        className="app__content-place-order"
        variants={headingVariant}
      >
        <p>
          You Have ordered <span>{selectionObj.base}</span> Pizza With
        </p>
        <ul>
          {selectionObj?.toppings?.map((item) => (
            <motion.li variants={horizontalRuleVariant} animate="show">
              {item}
            </motion.li>
          ))}
        </ul>
        <button
          type="button"
          className="app__content-btn"
          onClick={() => {
            setCurrentPage("create");
            setSelectionObj({
              base: "",
              toppings: [],
            });
          }}
        >
          Start Again 🔄
        </button>
      </motion.div>
    </div>
  );
};

export default PlaceOrderPage;
