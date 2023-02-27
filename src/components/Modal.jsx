import { motion, AnimatePresence } from "framer-motion";
import { headingVariant, horizontalRuleVariant } from "../utils/motionVariants";

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modalVariant = {
  hidden: { y: "-100vh" },
  show: {
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      delay: 1,
    },
  },
  exit: { y: "-100vh" },
};

const Modal = ({ open, setOpen }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="backdrop"
            variants={backdropVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="app__modal-container"
              variants={modalVariant}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h1 variants={headingVariant}>
                Enjoying Our Service?
              </motion.h1>
              <motion.button
                variants={backdropVariant}
                type="button"
                className="app__content-btn-newsletter"
                onClick={() => setOpen(false)}
              >
                Rate Us ⭐⭐⭐⭐⭐
              </motion.button>
              <motion.p
                variants={horizontalRuleVariant}
                onClick={() => setOpen(false)}
              >
                Skip
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
