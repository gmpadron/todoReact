import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
  addTodo,
  handleTextChange,
}) {
  return (
    <div className='todoApp'>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchTodos.map((todo, index) => (
          <TodoItem
          todo={todo}
          onComplete={() => completeTodo(index)} 
          onDelete={() => deleteTodo(index)} // Pasa el índice en lugar del texto
          handleTextChange={handleTextChange} 
          index={index} 
        />
        ))}
      </TodoList>

      <CreateTodoButton addTodo={addTodo}/>
    </div>
  );
}

export { AppUI };