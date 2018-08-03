import MeEvent from './event';
import Selector from './selector';

class BaseComponent extends MeEvent {
  constructor() {
    super();
    this.Selector = Selector;
  }
}

export default BaseComponent;