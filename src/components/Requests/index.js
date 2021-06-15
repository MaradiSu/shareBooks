import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class EventsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, day:1, month: 'Sep',name:'Anya'}, 
        {id:2, day:2, month: 'Jan',name:'Ram'}, 
        {id:3, day:3, month: 'Aug',name:'Shyam'}, 
        {id:4, day:4, month: 'Dec',name:'Tanya'}, 
        {id:5, day:5, month: 'Jul',name:'Chai'}, 
        {id:6, day:6, month: 'Oct',name:'Arya'}, 
        {id:7, day:7, month: 'Sep',name:'Chitra'},
        {id:8, day:8, month: 'Jan',name:'Suman'},
        {id:9, day:10, month: 'May',name:'Rema'},
        {id:13, day:13, month: 'May',name:'Rema'},
        {id:10, day:10, month: 'May',name:'Rema'},
        {id:11, day:11, month: 'May',name:'Rema'},
        {id:12, day:12, month: 'May',name:'Rema'},
      ],
    };
  }

  eventClickListener = (viewId) => {
    Alert.alert("alert", "event clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          enableEmptySections={true}
          style={styles.eventList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{item.day}</Text>
                     <Text  style={styles.eventMonth}>{item.month}</Text>
                  </View>
                  <View style={styles.eventContent}>
                    <Text  style={styles.eventTime}>10:00 am - 10:45 am</Text>
                    <Text  style={styles.userName}>John Doe</Text>
                    <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#DCDCDC",
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
});
