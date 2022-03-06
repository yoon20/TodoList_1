import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './conponents/TodoItem';
import Row from './conponents/Row';
import Padding from './conponents/Padding';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <Padding padding={ 12 }>
       <TodoItem/>
       <TodoItem/>
       <TodoItem/>
       <TodoItem/>
       <Row>
         <TextInput style={ styles.input }/>
         <Button title="Send" onPress={ () => {} }/>
       </Row>
      </Padding>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0 ,
  },
  input: {
    flex: 1,
    borderWidth: 1, 
  }
});
