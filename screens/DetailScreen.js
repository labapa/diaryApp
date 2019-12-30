import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DetailHeader from '../components/DetailHeader'

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style = { styles.textStyle}>DetailScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
        fontSize:40,
    }
  });