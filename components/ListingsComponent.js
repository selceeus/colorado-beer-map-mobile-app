import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Listings extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    Listings Component
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

export default Listings;