/** 
 * 准备工作.
 * 在`页面加载后`就应该自动执行.
 * 
 * @desc 例如: 判断文档类型是不是`HTML`
 */
const Ready = {
  documentIsHTML: true,
  preferredDoc: window.document,
  document: null,
  init() {
    this.setDocument();
  },
  /**
   * Sets document-related variables once based on the current document
   * 找到document后，就设置与之相关的变量
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
  setDocument(node) {
    let hasCompare;
    let subWindow;

    let doc = node ? (node.owerDocument || node) : this.preferredDoc;

    if (doc === document || (doc.nodeType !== NODETYPE.doc) || !doc.documentElement) {
      return document;
    }

    this.document = doc;
    this.documentIsHTML = this.isXML(this.document);
  },
  /**
   * Detects XML nodes
   * 判断是否是`XML`
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
  isXML(elem) {
    const documentElement = elem && (elem.owerDocument || elem).documentElement;
    return documentElement ? documentElement.nodeType !== 'HTML' : false;
  },

}
Ready.init();

/** 
 * 功能相关正则表达式集合
 *
 * @see [菜鸟-正则](http://www.runoob.com/js/js-regexp.html)
 */
const regexp_unit = {
  /** 
   * Easily-parseable/retrievable ID or TAG or CLASS selectors 
   */
  rquickExpr: /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
}

// @see http://www.w3school.com.cn/jsref/prop_node_nodetype.asp
const NODETYPE = {
  /** 此节点为`Document` */
  doc: 9,
  docFragment: 11
}

/**
 * 简单的`css`选择器.
 * 
 * @param {string} selector 筛选器
 * @param {[DOMNode]} context
 * @param {[Array]} results 
 * @param {[]} seed
 * 
 * @see [Sizz项目地址](https://github.com/jquery/sizzle)
 * @see [sizzle.js](http://sizzlejs.com/)
 * @see [分析如何匹配Id](https://gitee.com/weblife/sizzle-analyze/blob/v1.x.x/src/01_id%E7%9A%84%E5%A4%84%E7%90%86.js)
 * @example
 * ```
 * Selector('#app')
 * // => <element id="app"></element>
 * ```
 */
function Selector(selector, context, results = [], seed) {
  const { documentIsHTML } = Ready;
  const { rquickExpr } = regexp_unit;

  let m;
  // 没传范围，默认节点类型为9--`document`
  // @see http://www.w3school.com.cn/jsref/prop_node_nodetype.asp
  let nodeType = context ? context.nodeType : NODETYPE.doc;
  

  if (!seed) {
    context = context || document;

    if (documentIsHTML) {
      const match = rquickExpr.exec(selector);
      if ((nodeType != NODETYPE.docFragment) && match) {

        // ID selector
        if (m = match[1]) {
          if (nodeType === NODETYPE.doc) {
            if (context.getElementById(m)) {
              const elem = context.getElementById(m);

              // 兼容处理:
              // `id`元素的`id属性`与元素相等.
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (elem.id === m) {
                results.push(elem);
                return results;
              }
            }
          }
        }

      }
    }
  }
}



export default Selector;