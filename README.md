# Основные структуры данных

## Связный список ([Linked list](https://github.com/mmmaxonchik/data-structure-js/blob/main/LinkedList.js))
#### Связный список — это группа из узлов (nodes). В каждом узле содержатся:
- `data` - данные
- `next` - ссылка на следующий узел

Первым элементом списка называют **голова**(``head``), последний элемент списка называют **хвост**(``tail``), последний элемент списка содержит ссылку на ``null``.

![1](https://avatars.mds.yandex.net/get-lpc/403342/d92655b4-2807-4b81-8608-533a836b120f/width_1280_q70 "Связный список")

## Стек ([Stack](https://github.com/mmmaxonchik/data-structure-js/blob/main/Stack.js))
#### Данная структура данных позволяет добавлять и удалять элементы только из начала. Она работает по принципу LIFO — Last In, First Out. `Push` добавляет элемент в конце стека, `Pop` извлекает элемент из стека.

![2](https://avatars.mds.yandex.net/get-lpc/1527204/46e345db-7e1f-4a4d-a3fc-08d277cff6d6/width_1280_q70 "Стек")

## Очередь ([Queue](https://github.com/mmmaxonchik/data-structure-js/blob/main/Queue.js))
#### Данная структура данных похожа на стек, но в отличие от него она работает по принципу FIFO — First In, First Out. `Push` добавляет данные в конец очереди, а `Shift` извлекает из начала. 

![3](https://avatars.mds.yandex.net/get-lpc/1220100/d9a35f3b-452b-4870-af45-475040576afd/width_1280_q70 "Очередь (Queue)")