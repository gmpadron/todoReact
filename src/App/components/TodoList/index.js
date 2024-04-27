function TodoList({ children }) {
    return (
        <ul className="todoLIst">
            {children}
        </ul>
    );
}

export { TodoList };