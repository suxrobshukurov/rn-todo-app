import React from 'react';
import { View, StyleSheet } from "react-native";
import { THEME } from '../theme';

export const AppCard = props => (
	<View style={{ ...styles.default, ...props.style }}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
	default: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
		backgroundColor: THEME.MAIN_LIGHT,
		elevation: 8,
		shadowColor: THEME.MAIN_DARK,
		shadowOpacity: 0.5,
		shadowRadius: 2,
		shadowOffset: {
			width: 2,
			height: 2,
		}
	}
});