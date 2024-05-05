"use strict";

const _react = _interopRequireDefault(require("react"));

const _framerMotion = require("framer-motion");

const _cn = require("../../../utils/cn");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const HeroHighlight = ({ children, className, containerClassName }) => {
  let mouseX = (0, _framerMotion.useMotionValue)(0);
  let mouseY = (0, _framerMotion.useMotionValue)(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: (0, _cn.cn)(
        "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName,
      ),
      onMouseMove: handleMouseMove,
    },
    /*#__PURE__*/ _react.default.createElement("div", {
      className:
        "absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none",
    }),
    /*#__PURE__*/ _react.default.createElement(_framerMotion.motion.div, {
      className:
        "pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
      style: {
        WebkitMaskImage: (0, _framerMotion.useMotionTemplate)`radial-gradient(
          200px circle at ${mouseX}px ${mouseY}px,
          black 0%,
          transparent 100%
        )`,
        maskImage: (0, _framerMotion.useMotionTemplate)`radial-gradient(
          200px circle at ${mouseX}px ${mouseY}px,
          black 0%,
          transparent 100%
        )`,
      },
    }),
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: (0, _cn.cn)("relative z-20", className),
      },
      children,
    ),
  );
};

const Highlight = ({ children, className }) => {
  return /*#__PURE__*/ _react.default.createElement(
    _framerMotion.motion.span,
    {
      initial: {
        backgroundSize: "0% 100%",
      },
      animate: {
        backgroundSize: "100% 100%",
      },
      transition: {
        duration: 2,
        ease: "linear",
        delay: 0.5,
      },
      style: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      },
      className: (0, _cn.cn)(
        "relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-blue-300 to-green-300 dark:from-blue-500 dark:to-green-500",
        className,
      ),
    },
    children,
  );
};

module.exports = {
  HeroHighlight,
  Highlight,
};
