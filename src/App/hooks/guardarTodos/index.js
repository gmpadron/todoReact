  // actualizar y guardar en localStorage los todo
  
function guardarTodos(newTodos, setTodos) {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  };

  export { guardarTodos }