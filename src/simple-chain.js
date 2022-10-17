const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  array: [],
  length: 0,
  
  getLength(){
    let length = this.array.length;
    return length;
  },

  addLink(value){
    this.array.push('(' + ' ' + value + ' ' + ')');
    this.length++;
    return this;
  },

  removeLink(position){
    try {
      if(this.array[position - 1] === undefined){ 
      throw new Error("You can't remove incorrect link!");
    }
      this.array.splice(position - 1, 1);
      this.length--;
      return this;

    } catch{
      this.array = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain(){
   this.array.reverse();
    return this;
  },
  
  finishChain(){
    let finish = this.array.join('~~');
    this.array = [];
    this.length = 0;
    return finish;
  },
};

module.exports = {
  chainMaker
};
