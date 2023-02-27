import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./App.scss";
import { images } from "./constants";
import CreatePage from "./components/CreatePage";
import BaseSelectionPage from "./components/BaseSelectionPage";
import ToppingsSelectionPage from "./components/ToppingsSelectionPage";
import PlaceOrderPage from "./components/PlaceOrderPage";
import {
  containerVariant,
  createPageVariant,
  headingVariant,
  horizontalRuleVariant,
  logoVariant,
  otherPageVariant,
} from "./utils/motionVariants";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("create");
  const [selectionObj, setSelectionObj] = useState({
    base: "",
    toppings: [],
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (currentPage === "place-order") {
      setTimeout(() => setOpenModal(true), 4000);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [currentPage]);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="app__container"
    >
      <Modal open={openModal} setOpen={setOpenModal} />

      <div className="app__header">
        <motion.img
          drag
          dragConstraints={{ top: 0, left: 0, right: 300, bottom: 0 }}
          variants={logoVariant}
          src={images.logo}
          alt="pizza-logo"
          className="app__pizza-logo"
        />
        <div className="app__heading-container">
          <motion.h1 variants={headingVariant}>Pizza Joint</motion.h1>
          <motion.hr variants={horizontalRuleVariant} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            variants={
              currentPage === "create" ? createPageVariant : otherPageVariant
            }
            initial="hidden"
            animate="show"
            exit="exit"
            className="app__content"
          >
            <div className="app__content-box">
              {currentPage === "create" ? (
                <CreatePage
                  setCurrentPage={setCurrentPage}
                  selectionObj={selectionObj}
                  setSelectionObj={setSelectionObj}
                />
              ) : currentPage === "base-selection" ? (
                <BaseSelectionPage
                  setCurrentPage={setCurrentPage}
                  selectionObj={selectionObj}
                  setSelectionObj={setSelectionObj}
                />
              ) : currentPage === "toppings-selection" ? (
                <ToppingsSelectionPage
                  setCurrentPage={setCurrentPage}
                  selectionObj={selectionObj}
                  setSelectionObj={setSelectionObj}
                />
              ) : (
                <PlaceOrderPage
                  setCurrentPage={setCurrentPage}
                  selectionObj={selectionObj}
                  setSelectionObj={setSelectionObj}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
