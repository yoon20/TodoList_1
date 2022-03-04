import React from 'react';
import { Switch, Text } from 'react-native';
import Row from './Row';
 
function TodoItem(){
    return (
        <Row>
          <Switch/>
          <Text>할 일 목록</Text>
        </Row>
    )
}
export default TodoItem;    