isBST(root) {
    const checkTree = (v, min, max) => {
        if (v === null)
          return true;
        if (v.data <= min || max <= v.data)
          return false;
        return (checkTree(v.left, min, v.data) && checkTree(v.right, v.data, max));
    };

    return checkTree(root, -Infinity, Infinity);
}


const node = {
  data: 2,
  left: Node { data: 1, left: null, right: null },
  right: Node { data: 3, left: null, right: null }
}
isBST(node)
