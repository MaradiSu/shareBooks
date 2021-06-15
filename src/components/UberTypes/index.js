import React from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/books';



const UberTypes = (props) => {
  const confirm = () => {
    Alert.alert("Request sent to the User ")
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} key={type.id} />
      ))}

      <TouchableHighlight onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Request for Book
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default UberTypes;
