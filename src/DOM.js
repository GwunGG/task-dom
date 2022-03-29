/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const newTeg = document.createElement(`${tag}`);
        newTeg.innerHTML = `${content}`;
        document.body.appendChild(newTeg);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const newElem1 = document.createElement('div');
    newElem1.setAttribute('class', 'item_1');
    for (let i = 0; i < level; i++) {
        const newElem2 = document.createElement('div');
        newElem2.setAttribute('class', 'item_2');
        newElem1.prepend(newElem2);
        for (let i = 0; i < childrenCount; i++) {
            const newElem3 = document.createElement('div');
            newElem3.setAttribute('class', 'item_3');
            newElem2.append(newElem3);
        }
    }
    return newElem1;
}
/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const newElem1 = document.createElement('div');
    newElem1.setAttribute('class', 'item_1');
    for (let i = 0; i < 2; i++) {
        const newElem2 = document.createElement('section');
        newElem2.setAttribute('class', 'item_2');
        newElem1.prepend(newElem2);
        for (let i = 0; i < 2; i++) {
            const newElem3 = document.createElement('div');
            newElem3.setAttribute('class', 'item_3');
            newElem2.append(newElem3);
        }
    }
    return newElem1;
}
