import BaseComponent from './util/BaseComponent';

/** 弹层组件 */
class Layer extends BaseComponent {
  constructor(selector, config) {
    super();
    /** `Dom`元素 */
    this._element = this.Selector(selector)[0];
    /** 遮罩层元素 */
    this._maskElement = null;
    /** 内容元素 */
    this._contentElement = null;

    /** 默认配置 */
    this._config = {
      hasMask: true,
      veritcalCenter: true,
      /** 遮罩层是否可以点击 */
      maskCanTap: true,
      isCanDrag: false
    }

    // 混入配置参数
    if (typeof config === 'object') {
      for (let key in config) {
        if (config.hasOwnProperty(key)) {
          this._config[key] = config[key]
        }
      }
    }

    // 是否需要生成`遮罩`层
    if (this._config[`hasMask`]) {
      this._createMaskElement();
    }
  }
  /** 生成遮罩层元素 */
  _createMaskElement() {
    this['_maskElement'] = document.createElement('div');
    this['_maskElement'].classList.add('mask-wrap');
    this._element.appendChild(this['_maskElement']);
    this._element.style.display = 'none';

    // 点击遮罩层可以关闭
    if (this._config['maskCanTap']) {
      this._addMaskHandle();
    }
  }
  /** 遮罩层可以进行操作 */
  _addMaskHandle() {
    // 这里是事件中`this`的处理
    // 在事件回调中`this`为`this._maskElement`
    // 为了在回调中能够操作整个弹层，使用了这种方式
    // 其他方式等待探索
    this._maskElement['$layer'] = this;
    this._maskElement.addEventListener('click', this._onMaskHandle);
  }
  _onMaskHandle() {
    this['$layer'].close();
  }
  /**
   * 弹层`显示`,并`派发`事件
   * 
   * @see https://github.com/Jesonhu/js-event-handle/blob/master/script/04.js
   */
  open() {
    this._element.style.display = 'block';
    if (this._config['hasMask']) this['_maskElement'].style.opacity = 1;
    const event_open = this.createCustomEvent(Layer.EVENT_TYPE.open);
    this._element.dispatchEvent(event_open);
  }
  /** 
   * 弹层`关闭`,并`派发`事件
   */
  close() {
    const event_close = this.createCustomEvent(Layer.EVENT_TYPE.close);
    this._element.dispatchEvent(event_close);
    if (this._config['hasMask']) this['_maskElement'].style.opacity = 0;
    this._element.style.display = 'none';
  }

  // /** 静态属性 */
  // static EVENT_TYPE = {
  //   open: 'layer_open',
  //   close: 'layer_close'
  // }
}

/** 静态属性 */
Layer.EVENT_TYPE = {
  open: 'layer_open',
  close: 'layer_close'
}

export default Layer;