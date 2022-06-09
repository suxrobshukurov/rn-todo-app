import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../UI/AppCard';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
	return (
		<View>
			<AppCard style={styles.card}>
				<Text style={styles.text}>{todo.title}</Text>
				<Button title="Ред." />
			</AppCard>

			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title='Назад' onPress={goBack} color={THEME.GREY_COLOR} />
				</View>
				<View style={styles.button}>
					<Button title='Удалить' onPress={() => { onRemove(todo.id) }} color={THEME.DANGER_COLOR} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		width: '40%'
	},
	card: {
		marginBottom: 20,
	},
	text: {
		fontSize: 18
	}
})