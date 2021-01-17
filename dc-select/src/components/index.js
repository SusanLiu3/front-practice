const addEvent = (function () {
  let count = 0;
  return function (cb) {
    // if (count > 0) {
    //   return;
    // }
    let that = this;
    let dom = window.document.body;
    dom && dom.removeEventListener('click', function (e) { });
    dom.addEventListener('click', (e) => {
      typeof cb === 'function' && cb.call(that, e);
    });
    count = count + 1;
  };
})();
export {
  addEvent
};
