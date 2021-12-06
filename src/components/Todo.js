import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Todo = () => {
    const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

    return (
        <Container>
            <Wrapper>
                <TodoWrapper>
                    <Header>Todo App</Header>
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Todos" 
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        />
                        <Button type="submit">Add Todo</Button>
                    </Form>
                        {
                            todos.map((todo) => (
                                <Show key={todo.id}>
                                <TextHolder>
                                    {/* <TextInput 
                                    type="checkbox"
                                    id="completed"
                                    checked={todo.completed}
                                    onChange={() => toggleComplete(todo.id)} 
                                    /> */}
                                    {todo.id === todoEditing ? (
                                        <EditInput
                                            type="text"
                                            onChange={(e) => setEditingText(e.target.value)}
                                        />
                                        ) : (
                                        <Text style={{
                                            textDecoration: todo.completed ? "line-through":""
                                        }}>{todo.text}</Text>
                                    )}
                                </TextHolder>
                                <Actions>
                                {todo.id === todoEditing ? (
                                    <Button onClick={() => submitEdits(todo.id)}>Submit Edits</Button>
                                    ) : (
                                    <Button onClick={() => setTodoEditing(todo.id)}>Edit</Button>
                                    )}

                                    <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                                    <Button onClick={() => toggleComplete(todo.id)}>completed</Button>
                                </Actions>
                            </Show>
                            ))
                        }
                </TodoWrapper>
            </Wrapper>
        </Container>
    )
}

export default Todo

const EditInput = styled.input``;

const Actions = styled.div``;

const TextInput = styled.input``;

const Text = styled.div``;

const TextHolder = styled.div`
display: flex;
`;

const Show = styled.div`
display: flex;
justify-content: space-between;
`;

const Button = styled.button`
margin-right: 5px;
`;

const Input = styled.input``;

const Form = styled.form`
width: 300px;
margin-bottom: 50px;
`;

const Header = styled.h1`

`;

const TodoWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div`
width: 100%;
padding-top: 100px;
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
`;
