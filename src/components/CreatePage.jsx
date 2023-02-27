import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const CreatePage = ({ setCurrentPage }) => {
  const [showCreate, setShowCreate] = useState(false);
  setTimeout(() => {
    setShowCreate(true);
  }, 1000);
  return (
    <>
      <h1>Welcome To Pizza Joint</h1>
      <AnimatePresence>
        {showCreate && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            type="button"
            className="app__content-btn"
            onClick={() => setCurrentPage("base-selection")}
          >
            Create Your Pizza
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreatePage;
