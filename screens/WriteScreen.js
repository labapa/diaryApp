import React from 'react';
import { TextInput, StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WriteHeader from '../components/WriteHeader'

const { width, height } = Dimensions.get('window');

export default class WriteScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name='lead-pencil' size={25} style={{ color: tintColor }} />
    ),
    tabBarOnPress: ({ navigation }) => {
      navigation.navigate('Write');
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <WriteHeader />
          <TextInput
            placeholder="제목을 입력하세요"
            style={styles.title}
            returnKeyType="done" />
          <TextInput
            placeholder="내용을 입력하세요"
            multiline={true}
            style={styles.content}
            returnKeyType="done" />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  contentContainer: {
    width: width - 60,
  },
  title: {
    marginVertical: 30,
    fontSize: 30,
    paddingBottom: 12,
    borderBottomWidth: 2,
  },
  content: {
    fontSize: 20,
  },
});
