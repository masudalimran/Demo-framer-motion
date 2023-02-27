export const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const logoVariant = {
  show: {
    rotateZ: 360,
    transition: {
      repeat: Infinity,
      duration: 0.7,
      ease: [0.17, 0.17, 0.17, 0.17],
    },
  },
};

export const headingVariant = {
  show: {
    y: [-100, 0],
    transition: {
      duration: 1.2,
      staggerChildren: 1.5,
    },
  },
};

export const horizontalRuleVariant = {
  show: {
    x: [500, 0],
    transition: {
      duration: 1.2,
    },
  },
};

export const createPageVariant = {
  hidden: {
    x: "-100vw",
    marginTop: 0,
    opacity: 0.5,
    rotateZ: 180,
  },
  show: {
    marginTop: 200,
    x: 0,
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.7,
      type: "tween",
    },
  },
  exit: {
    x: "-100vw",
    marginTop: 0,
    opacity: 0.5,
    rotateZ: 180,
  },
};

export const otherPageVariant = {
  hidden: {
    x: "100vw",
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0.5,
  },
};

export const listItemVariant = {
  show: {
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
  hover: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: { type: "spring", stiffness: 500 },
  },
};

export const buttonVariant = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 80,
    },
  },
};
