import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
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
        const todo = todos.find(t => t.id === id);
        Alert.alert(
            "Удалить элемент",
            `Вы действительно хотите удалить "${todo.title}"?`,
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== id));
                    }
                }
            ],
            {
                cancelable: false,
            }
        );

    }

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if(todo.id === id){
                todo.title = title
            }
            return todo;
        }))
    }

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />;

    const selectedTodo = todos.find(todo => todo.id === todoId);
    if (todoId) {
        content = (
        <TodoScreen 
            goBack={() => setTodoId(null)} 
            todo={selectedTodo} 
            onRemove={removeTodo} 
            onSave={updateTodo}
            />)
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