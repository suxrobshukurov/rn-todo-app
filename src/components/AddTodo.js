import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from "react";
import { THEME } from '../theme';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('')
        } else {
            Alert.alert('Введите текст!')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                placeholder="Введите текст..."
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
                value={value}
                onChangeText={setValue}
            />
            <Button title={"Добавить"} onPress={pressHandler} color={THEME.MAIN_DEFAULT} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        borderBottomWidth: 1,
        borderBottomColor: THEME.MAIN_DARK,
        borderStyle: 'solid',
    },
    button: {}
});