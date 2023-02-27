import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariant, listItemVariant } from "../utils/motionVariants";

const BaseSelectionPage = ({
  setCurrentPage,
  selectionObj,
  setSelectionObj,
}) => {
  const baseArr = ["Classic", "Thin & Crispy", "Thick Crust"];
  const [selectedBase, setSelectedBase] = useState("");
  const handleAddBase = (index) => {
    if (selectedBase === index) setSelectedBase("");
    else setSelectedBase(index);
  };

  useEffect(() => {
    let obj = { ...selectionObj };
    obj.base = selectedBase;
    setSelectionObj(obj);
  }, [selectedBase]);
  return (
    <>
      <h4>Step 1: Choose Your Base</h4>
      <hr />
      <div className="app__content-selection">
        <ul>
          {baseArr.map((base) => (
            <motion.li
              variants={listItemVariant}
              animate="show"
              whileHover="hover"
              onClick={() => handleAddBase(base)}
              key={`id-${base}`}
            >
              {base}
              {selectedBase.includes(base) && " ☑️ "}
            </motion.li>
          ))}
        </ul>
      </div>
      {selectedBase !== "" ? (
        <motion.button
          variants={buttonVariant}
          initial="hidden"
          animate="show"
          type="button"
          className={
            selectedBase === ""
              ? "app__content-btn-disabled"
              : "app__content-btn"
          }
          disabled={selectedBase === ""}
          onClick={() => setCurrentPage("toppings-selection")}
        >
          Next
        </motion.button>
      ) : (
        <div className="app__content-btn-disabled" />
      )}
    </>
  );
};

export default BaseSelectionPage;
