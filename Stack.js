class StackNode {
    constructor(data, prev) {
        this.data = data
        this.prev = prev
    }
}
class Stack {
    constructor() {
        this.last = null
    }
    /**
    * Добавляет узел в конец стека
    * @param {any} data
    * @return {this}
     */
    push(data) {
        this.last = new StackNode(data, this.last)
        return this
    }
    /**
     * Извлекает узел из конца стека
     *
     * @returns {Stack}
     */
    pop(){
        if (!this.last) return this
        this.last = this.last.prev
        return this
    }
}
module.exports = {
    StackNode,
    Stack
}
