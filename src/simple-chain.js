import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength() || position < 1) {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1)
    }
    return this;
  },

  reverseChain() {
    if(this.getLength() > 1) {
      this.chain.reverse();
    }
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
