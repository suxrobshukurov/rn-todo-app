import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert(
                'Ошибка!'
                `Минимальная длинна названия 3 символаю Сейчас ${title.trim().length}`
            )
        } else {
            onSave(title)
        }
    }

    return(
        <Modal
            visible={visible}
            transparent={false}
            animationType='slide'
        >
            <View style={styles.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Введите текст...'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title='Отменить' color={THEME.DANGER_COLOR} onPress={onCancel}/>
                    <Button title='Сохранить' color={THEME.MAIN_DEFAULT} onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})