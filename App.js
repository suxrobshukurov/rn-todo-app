import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Выучить React Native' },
        { id: '2', title: 'Написать приложение на React Native' },
    ]);
    const [todoId, setTodoId] = useState('2')

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }]);
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />;

    const selectedTodo = todos.find(todo => todo.id === todoId);
    if (todoId) {
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
    }

    return (
        <View>
            <Navbar title="Запоминалка" />
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});