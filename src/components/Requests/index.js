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
        {id:1, day:'01', month: 'Sep',name:'Anya',requestedAt:'10:00 am',bookname:'Rich Dada Poor Dad'}, 
        {id:2, day:'05', month: 'Jan',name:'Ram',requestedAt:'10:00 am',bookname:'Sample users can change here'}, 
        {id:3, day:'3', month: 'Aug',name:'Shyam',requestedAt:'10:00 am',bookname:'Laanguages and its types'}, 
        {id:4, day:'4', month: 'Dec',name:'Tanya',requestedAt:'10:00 am',bookname:'Media: A Rapid Growth'}, 
        {id:5, day:'11', month: 'Jul',name:'Chai',requestedAt:'10:00 am',bookname:'Bring a Change in Life'}, 
        {id:6, day:'6', month: 'Oct',name:'Arya',requestedAt:'10:00 am',bookname:'Think Like A Monk'}, 
        {id:7, day:'7', month: 'Sep',name:'Chitra',requestedAt:'10:00 am',bookname:'Rich Dada Poor Dad'},
        {id:8, day:'18', month: 'Jan',name:'Suman',requestedAt:'10:00 am',bookname:'Ram : The hero of Ramayan'},
        {id:9, day:'10', month: 'May',name:'Rema',requestedAt:'10:00 am',bookname:'7 best habits for your life'},
        {id:10, day:'20', month: 'May',name:'Rema',requestedAt:'10:00 am',bookname:'A subtle art of not giving'},
        {id:11, day:'11', month: 'May',name:'Rema',requestedAt:'10:00 am',bookname:'My expreminent on the truth'},
        {id:12, day:'16', month: 'May',name:'Rema',requestedAt:'10:00 am',bookname:'Wings of fire'},
        {id:13, day:'13', month: 'May',name:'Rema',requestedAt:'10:00 am',bookname:'Rich Dada Poor Dad'},
      ],
    };
  }

  eventClickListener = (viewId) => {
    Alert.alert("alert", "Request redirect");
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
                    <Text  style={styles.userName}>{item.name}</Text>
                    <Text  style={styles.description}>{item.bookname}</Text>
                    <Text  style={styles.eventTime}>Requested at : {item.requestedAt}</Text>
                    
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
