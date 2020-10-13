import React, {useState} from 'react';
import {v1 as uuid} from "uuid"; 
import AddTodoForm from './AddTodoForm';


const Todo = (id) => {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du Pain'},
        {id: 3, todo: 'Acheter du fromage'}
    ])

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const [warning, setWarning] = useState(false)

    const myTodos = todos.map( todo => {

        return(
        <li className="list-group-item" key={todo.id}>{todo.todo}
        <span className="btn btn-danger btn-sm float-right" onClick={() => removeTodo(todo.id)}>x</span>
        </li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo !== '') {

            warning && setWarning(false)

            setTodos([...todos, {
                id: uuid(),
                todo: newTodo
            }])
        } else {
            setWarning(true)
        }
        
    }

    const warningMsg = warning && <div className="alert alert-danger mt-4" role="alert">
    Veuillez indiquer un Todo</div>

    return (
        <div>
            {warningMsg}
            <h1 className="text-center" >{todos.length} To-do</h1>

            <ul className="list-group">
                {myTodos} 
                <AddTodoForm addNewTodo={addNewTodo}  />
                
            </ul>
        </div>
    )
}

export default Todo;