import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export const Navbar = ({title}) => {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 70,
        backgroundColor: '#000080',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
    },
})