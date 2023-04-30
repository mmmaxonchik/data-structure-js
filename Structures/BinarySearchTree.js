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
     * Удаление узла из дерева.
     *
     * @param data{number}
     * @returns {BinarySearchTree}
     */
    delete(data){
        const childNode = this.#searchChildNode(this.tree, data)
        // 1) Если такого узла нет
        if (!childNode) return this
        const parentNode =  this.#searchParentNode(childNode, this.tree)
        // 2) Если у узла нет дочерних элементов
        if (!childNode.leftChild && !childNode.rightChild) {
            parentNode.leftChild === childNode
                ? parentNode.leftChild = null
                : parentNode.rightChild = null
            return this
        }
        // 3) Если у узла один дочерний элемент
        const haveOneRightNode = !childNode.leftChild && childNode.rightChild
        const haveOneLeftNode = childNode.leftChild && !childNode.rightChild
        if (haveOneRightNode) {
            parentNode.leftChild === childNode
                ? parentNode.leftChild = childNode.rightChild
                : parentNode.rightChild = childNode.rightChild
            return this
        }
        if (haveOneLeftNode) {
            parentNode.leftChild === childNode
                ? parentNode.leftChild = childNode.leftChild
                : parentNode.rightChild = childNode.leftChild
            return this
        }
        // 3) Если у узла два дочерних элемента
        let minChildNode = this.#searchMinNode(childNode.rightChild)
        const copyChildNode =  Object.assign({}, minChildNode)
        const parentMinChildNode = this.#searchParentNode(minChildNode, parentNode)

        parentMinChildNode.leftChild === minChildNode
            ? parentMinChildNode.leftChild = null
            : parentMinChildNode.rightChild = null
        copyChildNode.leftChild = childNode.leftChild
        copyChildNode.rightChild = childNode.rightChild
        minChildNode = null
        if (parentNode.leftChild === childNode) {
            parentNode.leftChild = copyChildNode
            return this
        }
        if (parentNode.rightChild === childNode) {
            parentNode.rightChild = copyChildNode
            return this
        }

    }

    /**
     * Вспомогательный приватный метод возвращающий дочерний узел по входным данным.
     *
     * @param node
     * @param data
     * @returns {null | TreeNode}
     */
    #searchChildNode(node, data) {
        if (node.data === data) return node
        if (node.data > data) {
            return this.#searchChildNode(node.leftChild, data)
        }
        if (node.data < data) {
            return this.#searchChildNode(node.rightChild, data)
        }
    }
    /**
     * Вспомогательный приватный метод возвращающий родителя узла по входному дочернему узлу.
     * @param node
     * @param tree
     * @returns {TreeNode}
     */
    #searchParentNode(node, tree) {
        if (tree.leftChild) {
            if (tree.leftChild.data === node.data) {
                return tree
            }
        }
        if (tree.rightChild) {
            if (tree.rightChild.data === node.data) {
                return tree
            }
        }
        if (node.data < tree.data) {
            return this.#searchParentNode(node, tree.leftChild)
        }
        if (node.data > tree.data) {
            return this.#searchParentNode(node, tree.rightChild)
        }
    }
    /**
     * Вспомогательный приватный метод возвращающий минимальный узел.
     * @param node{TreeNode}
     * @returns {TreeNode}
     */
    #searchMinNode(node){
        if (!node.leftChild) return node
        else {
            return this.#searchMinNode(node.leftChild)
        }
    }

    /**
     * Статический метод реализующий логирование полного обхода дерева.
     * @param tree
     */
    static traversalLogTree(tree){
        if (tree !== null) {
            console.log(tree.data)
            this.traversalLogTree(tree.leftChild)
            this.traversalLogTree(tree.rightChild)
        }
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
module.exports = {
    TreeNode,
    BinarySearchTree
}
