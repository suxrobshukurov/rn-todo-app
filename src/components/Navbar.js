import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { THEME } from '../theme';

export const Navbar = ({ title }) => {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 70,
        backgroundColor: THEME.MAIN_DEFAULT,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        color: THEME.MAIN_LIGHT,
        fontWeight: '700',
    },
})