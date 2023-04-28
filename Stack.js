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

    /**
     * Преобразует стек в массив.
     *
     * @returns {any[]}
     */
    toArray(){
        const dataArr = []
        while (this.last) {
            dataArr.push(this.last.data)
            this.last = this.last.prev
        }
        return dataArr
    }

    /**
     * Статическое приватное свойство для метода toArray()
     * @type {any[]}
     */
    static #dataArr = []
    /**
     * Статический метод класса Stack, возвращает массив с данными из стека.
     * @param last - Параметром передается obj.last
     * @returns {any[]}
     */
    static toArray(last){
        if (last) {
            this.#dataArr.push(last.data)
            return this.toArray(last.prev)
        }
        return this.#dataArr.reverse()
    }
}

module.exports = {
    StackNode,
    Stack
}
