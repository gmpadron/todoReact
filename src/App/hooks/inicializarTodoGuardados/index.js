function inicializarTodoGuardados() {

    let defaultTodos = [
        { text: 'Tarea 1 cursos', completed: true },
        { text: 'tarea 2 periodico', completed: false },
        { text: 'tarea 3 lapastina', completed: false },
        { text: 'Tarea 4 cebolla', completed: true },
    ];

    // agregar Lista de Todos de fabrica
    // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

    const storedTodos = localStorage.getItem('TODOS_V1');
    if (storedTodos !== null) {
        //console.log("positivo");
        var arrayObjetos = JSON.parse(storedTodos);
        return defaultTodos = arrayObjetos;
        //console.log(arrayObjetos);
    } else {
        //console.log("negativo");
        localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
        return defaultTodos
    };

}

export { inicializarTodoGuardados };