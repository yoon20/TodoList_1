import { StatusBar } from 'expo-status-bar';
import React,{useCallback, useState} from 'react';
import Constants from 'expo-constants';
import { Alert, Button, FlatList, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './conponents/TodoItem';
import Row from './conponents/Row';
import Padding from './conponents/Padding';

export default function App() {
  const [ list,setList ] = useState( [] );
  const [inputText, setInputText] = useState( '' );
  const addItem = useCallback( ()=>{
    setList( [...list, { key: new Date().toString(), content: inputText } ])
    setInputText(' ');
  },[list, inputText ] );
  const removeItem = useCallback(( key ) => {
    setList( list.filter( item => item.key !== key ));
  }, [ list ]);
  return (
    <SafeAreaView style={ styles.container }>
      <Padding padding={ 12 } style={ { flex: 1 }}>
        {/*출력*/}
        <FlatList
        data = { list }
        renderItem = { item => (
          <TodoItem
            label = {item.item.content } 
            onDelete ={ ()=> removeItem( item.item.key ) }
          />
         ) }
        style ={{ flex: 1 }}
        />
        {/*입력*/}
       <Row>
         <TextInput 
         style={ styles.input }
         value={ inputText } 
         onChangeText={ text => setInputText( text )}
         />
         <Button title="Send" onPress={ addItem }/>
       </Row>
      </Padding> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0 ,
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1, 
  }
});
