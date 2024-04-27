import { } from './CreateTodoButton.css';
import { IcoSvg } from '../../svg';

function CreateTodoButton({addTodo}) {
    return (
        <button onClick={addTodo}>
            <IcoSvg ico={'add'}></IcoSvg>
        </button>
    );
}

export { CreateTodoButton };