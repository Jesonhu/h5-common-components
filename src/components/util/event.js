/**
 * 自定义事件类 
 */
class MeEvent {
  /**
   * 创建一个自定义的事件
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
        bubbles: true,
        cancelable: true
      });
    } else if (typeof document.createEvent === 'function') {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
    }
    return event;
  }
}

export default MeEvent;