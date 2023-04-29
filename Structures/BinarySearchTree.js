class TreeNode {
    constructor(data, firstChild = null, secondChild = null) {
        this.data = data
        this.leftChild = firstChild
        this.rightChild = secondChild
    }
}

class BinarySearchTree {
    constructor() {
        this.tree = null
    }

    /**
     * Вставка элемента в дерево.
     *
     * @param data{number}
     * @returns {BinarySearchTree}
     */
    insert(data){
        if (!this.tree) {
            this.tree = new TreeNode(data)
            return this
        }
        this.#insertNode(this.tree, new TreeNode(data))
        return this
    }
    /**
     * Приватный вспомогательный метод для insert.
     *
     * @param oldNode{TreeNode}
     * @param newNode{TreeNode}
     */
    #insertNode(oldNode, newNode){
        if (oldNode.data < newNode.data) {
            !oldNode.rightChild ?  oldNode.rightChild = newNode :  this.#insertNode(oldNode.rightChild, newNode)
        }
        if (oldNode.data > newNode.data) {
            !oldNode.leftChild ?  oldNode.leftChild = newNode :  this.#insertNode(oldNode.leftChild, newNode)
        }
    }


    /**
     * Вспомогательная статическая переменная для метода traversalTree.
     * @type {number[]}
     */
    static #traversalTreeArr = []
    /**
     * Статический метод реализующий полный обход дерева и возвращающий массив данных этого дерева.
     * @param tree{TreeNode}
     * @returns {number[]}
     */
    static traversalTree(tree){
        if (tree !== null) {
            this.#traversalTreeArr.push(tree.data)
            this.traversalTree(tree.leftChild)
            this.traversalTree(tree.rightChild)
        }
        return this.#traversalTreeArr
    }


    /**
     * Статический метод показывающий есть ли узел с указанными данными в данном дереве.
     *
     * @param tree{TreeNode}
     * @param data{number}
     */
    static has(tree, data){
        if (!tree) return false
        if (!tree.leftChild && !tree.rightChild && tree.data !== data) return false
        if (tree.data === data) return true
        if (tree.data < data) {
            return this.has(tree.rightChild, data)
        }
        if (tree.data > data) {
            return this.has(tree.leftChild, data)
        }
    }
}




