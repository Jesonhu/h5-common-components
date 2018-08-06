/**
 * 自定义事件类.
 * 
 * @see [漫谈js自定义事件、DOM/伪DOM自定义事件](https://www.zhangxinxu.com/wordpress/2012/04/js-dom%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6/)
 */
class MeEvent {
  /**
   * 创建一个自定义的事件.
   * 
   * @param {string} eventName 自定义事件的类型(名称)
   * @param {[string]} msg 传递的消息
   */
  createCustomEvent(eventType, msg = '') {
    let event;
    if (typeof CustomEvent === 'function') {
      event = new CustomEvent(eventType, {
        detail: {
          message: msg,
          time: new Date()
        },
        bubbles: false,
        cancelable: true
      });
    } else if (typeof document.createEvent === 'function') {
      event = document.createEvent('Event');
      event.initEvent(eventName, capture = false, false);
    }
    return event;
  }
  /**
   * 自定义事件的监听 
   */
  addEventListener(type, fn, capture) {
    const el = this._element;
    if (window.addEventListener) {
      el.addEventListener(type, fn, capture);
    } else if (window.attachEvent) {
      el.attachEvent('on' + type, fn);
    }
    return this;
  }
  /**
   * 自定义事件的移除 
   */
  removeEventListener(type, fn, capture) {
    const el = this._element;
    if (window.removeEventListener) {
      el.removeEventListener(type, fn, capture = false);
    } else if (document.attachEvent) {
      el.detachEvent("on" + type, fn);
      const arrEv = el["ev" + type];
      if (arrEv instanceof Array) {
        for (var i = 0; i < arrEv.length; i += 1) {
          // 删除该方法名下所有绑定的propertychange事件
          el.detachEvent("onpropertychange", arrEv[i]);
        }
      }
    }
    return this;
  }
}

export default MeEvent;