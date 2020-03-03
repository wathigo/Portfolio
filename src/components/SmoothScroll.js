const animate = (elem, style, unit, from, to, time, prop) => {
  if (!elem) {
    return;
  }
  const start = new Date().getTime();
  const timer = setInterval(() => {
    const step = Math.min(1, (new Date().getTime() - start) / time);
    if (prop) {
      elem[style] = (from + step * (to - from)) + unit; // eslint-disable-line no-param-reassign
    } else {
      elem.style[style] = (from + step * (to - from)) + unit; // eslint-disable-line
    }
    if (step === 1) {
      clearInterval(timer);
    }
  }, 25);
  if (prop) {
    elem[style] = from + unit; // eslint-disable-line no-param-reassign
  } else {
    elem.style[style] = from + unit; // eslint-disable-line no-param-reassign
  }
};

const animateScroll = id => {
  const target = document.querySelector(`#${id}`);
  animate(document.scrollingElement || document.documentElement, 'scrollTop', '', 0, target.offsetTop, 1000, true);
};

export default animateScroll;
