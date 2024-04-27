import React from 'react';
import { } from './styles/stylesTodo.css';
import { AppUI } from './AppUI';
import { inicializarTodoGuardados } from "./hooks/inicializarTodoGuardados";
import { guardarTodos } from "./hooks/guardarTodos";

// inizializar ToDos
let defaultTodos = inicializarTodoGuardados();

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  // actualizar y guardar en localStorage los todo

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // interesante 

  // console.log('log 1');
  // 
  // React.useEffect(() =>{
  //   console.log('log 2');
  // },[totalTodos])
  // 
  // console.log('log 3');

  function handleTextChange(newText, index) {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    guardarTodos(newTodos, setTodos);
  }

  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      ;
    }
  );

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (index >= 0 && index < newTodos.length) {
      newTodos[index].completed = !newTodos[index].completed;
      guardarTodos(newTodos, setTodos);
    } else {
      console.log('Error: Índice de todo fuera de rango');
    }
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    if (index >= 0 && index < newTodos.length) {
      newTodos.splice(index, 1);
      guardarTodos(newTodos, setTodos);
    } else {
      console.log('Error: Índice de todo fuera de rango');
    }
  }

  const addTodo = () => {
    const newTodos = [...todos];

    newTodos.push({ text: 'New Todo', completed: false })
    guardarTodos(newTodos, setTodos);

  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      addTodo={addTodo}
      handleTextChange={handleTextChange}
      todos={todos}
    />
  );
}

export default App;