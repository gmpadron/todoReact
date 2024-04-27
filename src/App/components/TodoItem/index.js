import { IcoSvg } from '../../svg';
import { useState } from 'react'; 

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(props.todo.text);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditingText(event.target.value); 
  };

  const handleBlur = () => {
    setIsEditing(false);
    props.handleTextChange(editingText, props.index); 
  };

  return (
    <li className={`todoItem ${props.todo.completed ? "status-completed-true" : "status-completed-false"}`}>
      <span
        className="status-completed-item"
        onClick={props.onComplete}
      >
        <IcoSvg ico={'done'}></IcoSvg>
      </span>

      {isEditing ? (
        <input
          type="text"
          value={editingText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p onClick={handleTextClick}>{props.todo.text}</p>
      )}

      <span className="delete-item" onClick={props.onDelete}>
        <IcoSvg ico={'close'}></IcoSvg>
      </span>
    </li>
  );
}

export { TodoItem };
