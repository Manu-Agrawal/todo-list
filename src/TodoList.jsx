import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function TodoList() {

    const data = localStorage.todos == null ? [] : JSON.parse(localStorage.todos)

    const [todos, setTodos] = useState(data);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    }
    const addTodo = (text) => {
        setTodos([...todos, { text: text, id: crypto.randomUUID(), completed: false }])
    }

    // const toggleTodo = (id) => {
    //     setTodos(todos.map((todo) => {
    //         if (todo.id == id) todo.completed = !todo.completed;
    //         return todo;
    //     }))
    // }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        }))
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3
        }}>
            <Typography variant="h2" component="h1">
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} remove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
                })}
            </List>
            <TodoForm addTodo={addTodo} />

        </Box>

    );
}