const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');//

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
  this.roote = null;
}
  root() {
    if (!this.roote) {
      return null;
    } else {
   return this.roote;
    }
    
  }

  add(value) {
this.roote = addNodeValue(this.roote, value);
function addNodeValue(node, value) {
    
if (!node){
  return new Node(value);
}

if (node.value === value) {
  return node;
}

if (value < node.value) {
  node.left = addNodeValue(node.left, value);
} else {
  node.right = addNodeValue(node.right, value);
}
return node;
}

   /* if (!this.data){
      this.data = new Node(value);
    }
    if (value < this.data) {
      this.left = new Node(value);
    } else {this.right = new Node(value);
    }*/



    /*this.data = addNodeOfTheTree(this.data, value);
    function addNodeOfTheTree(node, value){
      if (!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        node.left = addNodeOfTheTree(node.left, value);
      } else {node.right = addNodeOfTheTree(node.right, value);
      }
      return node;
    }*/
  }

  has(value) {
    return hasValueSearch(this.roote, value);

    function hasValueSearch(node, value) {
      if (!node) {
        return false;
      } 
      if (node.value === value) {
        return true;
      }
      return value < node.value ?
      hasValueSearch(node.left, value) :
      hasValueSearch(node.right, value);
    }
    
  }



   /* if (this.data === value) {
      return true;
    } else{
      return false;
    }
  }*/




   /* this.data = searchNodeOfTheTree(this.data, value);
    function searchNodeOfTheTree(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      return value < node.value ?
      searchNodeOfTheTree(node.left, value) :
      searchNodeOfTheTree(node.right, value);
    }
  }*/

  find(value) {
    if (this.data === value) {
      return this.data;
    }else {
      return null;
    }
  }



  remove(value) {

this.roote = removeNodeValue(this.roote, value);

function removeNodeValue(node, value) {
if (!node) {
  return null;
}

if (value < node.value){
  node.left = removeNodeValue(node.left, value);
  return node;
} else if(node.value < value) {
  node.right = removeNodeValue(node.right, value);
  return node;
} else {
  if (!node.left && !node.right) {
    return null;
  }
  if (!node.left) {
    node = node.right;
    return node;
  }
  if (!node.right) {
    node = node.left;
    return node;
  }

  let forRight = node.right;
  while (forRight.left) {
    forRight = forRight.left;
  }
  node.value = forRight.value;

  node.right = removeNodeValue(node.right, forRight.value);
  return node;
}
}
  




    /*if (this.data === value) {
      this.data = null;
    }*/

  }

  min() {
    if (!this.roote){
      return;
    }
    let node = this.roote;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.roote){
      return;
    }
    let node = this.roote;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};