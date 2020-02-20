const animate = (elem, style, unit, from, to, time, prop) => {
  if (!elem) {
      return;
  }
  let start = new Date().getTime(),
      timer = setInterval(function () {
          let step = Math.min(1, (new Date().getTime() - start) / time);
          if (prop) {
              elem[style] = (from + step * (to - from))+unit;
          } else {
              elem.style[style] = (from + step * (to - from))+unit;
          }
          if (step === 1) {
              clearInterval(timer);
          }
      }, 25);
  if (prop) {
        elem[style] = from+unit;
  } else {
        elem.style[style] = from+unit;
  }
}

const animateScroll = (id) => {
  let target = document.querySelector(`#${id}`);
  animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 500, true);
}

export default animateScroll;
