import { StyleSheet, View, TextInput, Button, Alert  } from 'react-native';
import React, {useState} from "react";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('')
        } else {
            Alert.alert('Введите текст!')
        }
    }

    return(
        <View style={styles.block}>
            <TextInput 
            style={styles.input} 
            placeholder="Введите текст..."
            value={value}
            onChangeText={setValue}
            />
            <Button title={"Добавить"}  onPress={pressHandler}/>
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
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'solid',
    },
    button: {}
});