class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(...arg) {
    this.root = null;

    if (arg.length > 1) {
      if (arg.every(val => typeof val === 'number')) {
        arg.forEach(this.insert.bind(this));
      } else {
        throw new Error('Unknow Type!');
      }
    } else if (arg.length === 1 && arg[0] instanceof Array) {
      arg[0].forEach(this.insert.bind(this));
    }
  }

  // 插入
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }

  }

  _insertNode(node, newNode) {
    if (newNode.val < node.val) {
      
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }

    } else {

      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }

    }
  }

  // 中序遍历
  inOrderTraverse(cb) {
    this._inOrderTraverseNode(this.root, cb);
  }

  _inOrderTraverseNode(node, cb) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, cb);
      cb(node.val);
      this._inOrderTraverseNode(node.right, cb);
    }
  }

  // 前序遍历
  preOrderTraverse(cb) {
    this._preOrderTraverseNode(this.root, cb);
  }

  _preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.val);
      this._preOrderTraverseNode(node.left, cb);
      this._preOrderTraverseNode(node.right, cb);
    }
  }

  // 后序遍历
  postOrderTraverse(cb) {
    this._postOrderTraverseNode(this.root, cb);
  }

  _postOrderTraverseNode(node, cb) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, cb);
      this._postOrderTraverseNode(node.right, cb);
      cb(node.val);
    }
  }

  // 最小值
  min() {
    return this._min(this.root);
  }

  _min(node) {
    if (!node) return null;

    while (node.left) {
      node = node.left
    }
    
    return node.val;
  }

  // 最大值
  max() {
    return this._max(this.root);
  }

  _max(node) {
    if (!node) return null;
    
    while (node.right) {
      node = node.right;
    }

    return node.val;
  }

  // 查找
  find(val) {
    return this._find(this.root, val);
  }

  _find(node, val) {
    if (node === null) return false;

    if (node.val === val) {
      return true;
    } else if(node.val > val) {
      return this._find(node.left, val);
    } else {
      return this._find(node.right, val);
    }

    return false;
  }

  remove(val) {
    return this._remove(this.root, val);
  }

  _remove(node, val) {
    if (node === null) return false;

    if (node.val === val) {
      node = null;
      return true;
    } else if (node.val > val) {
      return this._remove(node.left, val);
    } else {
      return this._remove(node.right, val);
    }

    return false;
  }
}

var bt = new BinaryTree([7,1,5,2,6,3,8,9,10,15,4,12,56,1,2,0,4,-4]);

console.log(bt);