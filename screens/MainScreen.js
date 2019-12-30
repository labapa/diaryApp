import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name='calendar-multiselect' size={25} style={{ color: tintColor }} />
    )
  }
  state = {
    selectedDate: '',
    Posts: [
      {
        title: '12월 30일에 쓴 글',
        content: '본문',
        date: '2019-12-30',
      },
      {
        title: '12월 31일에 쓴 글',
        content: '본문',
        date: '2019-12-31',
      },
    ]
  }

  render() {
    return (
      console.log(this.state.selectedDate), 
      <SafeAreaView style={styles.container}>
        <Calendar
          onDayPress={(day) => { this.setState(this.state.selectedDate = day) }}
          current={new Date()} />
        <ScrollView>
          <FlatList
            data={this.state.Posts.filter(data => { return data.date == this.state.selectedDate.dateString })}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {this.props.navigation.navigate('Detail',{post:item})}}
                  style={styles.listitem}>
                  <View>
                    <Text style={styles.listtext}>
                      제목 : {item.title}
                    </Text>
                    <Text style={styles.listtext}>
                      내용 : {item.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => { return `$(index)` }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    marginLeft: 50,
    marginTop: 20,
    borderLeftColor: "black",
    borderLeftWidth: 4,
    paddingLeft: 30,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 40,
  },
  listtext: {
    fontSize: 20,
  }
});
