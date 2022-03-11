// 防抖
function debounce(func, wait, immediate) {
    let timeout;
  
    return function () {
      let context = this;
      let args = arguments;
  
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        let callNow = !timeout;
        timeout = setTimeout(function () {
          timeout = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
    };
  }
  
//   节流
// 使用时间戳
function throttle(func, wait) {
    let preTime = 0;
  
    return function () {
      let nowTime = +new Date();
      let context = this;
      let args = arguments;
  
      if (nowTime - preTime > wait) {
        func.apply(context, args);
        preTime = nowTime;
      }
    };
  }
  
  // 定时器实现
  function throttle(func, wait) {
    let timeout;
  
    return function () {
      let context = this;
      let args = arguments;
  
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    };
  }
  