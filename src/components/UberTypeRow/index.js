import React from "react";
import { View, Image, Text, Pressable, Alert } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/sample1-Copy.png');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/sample1-Copy.png');
    }
    return require('../../assets/images/sample1-Copy.png');
  }

  return (
    <Pressable onPress={()=>{
      Alert.alert("Selected "+type.name)
    }} style={{
      backgroundColor: 'grey',
      borderRadius :20,
      padding: 10,
      margin: 10,
      alignItems: 'center',
    }}>
    
    <View style={styles.container}>

      {console.log(type.uri)}
      <Image
        style={styles.image}
        source={type.uri}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
         
          <Ionicons name={'journal'} size={16} />
          {type.total}
        </Text>
        <Text style={styles.time}>
        {type.duration} {' '} to reach 
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'file'} size={18} color={'#42d742'} />
        <Text style={styles.price}>{type.name}</Text>
      </View>
    </View>
    </Pressable>
  );
};

export default UberTypeRow;
