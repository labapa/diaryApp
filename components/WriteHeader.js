import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WriteHeader = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => { navigation.goBack() }} >
                    <MaterialCommunityIcons name = "backspace" size = {30} />
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between'
    }
})
export default withNavigation(WriteHeader);
