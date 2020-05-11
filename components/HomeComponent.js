import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    Home Component
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    }
});

export default Home;