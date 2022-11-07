export const imagerror = {
  inserted(dom, options) {
    // 注册onerror事件
    dom.onerror = function() {
      // 如果报错，这里图片就是默认的图片
      dom.src = options.value
    }
  }
}
