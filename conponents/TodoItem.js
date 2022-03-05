import React from 'react';
import { Switch, Text } from 'react-native';
import Row from './Row';
 
function TodoItem(){
    return (
        <Row style={{ alignItems: 'center', marginBottom: 12,}}>
          <Switch style={{ marginRight: 8, }}  />
          <Text>할 일 </Text>
        </Row>
    )
}
export default TodoItem;    