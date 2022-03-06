import React,{ useState } from 'react';
import { Switch, Text } from 'react-native';
import Row from './Row';
 
function TodoItem(){
  const [ isDone, setDone ] = useState( false );
    return (
        <Row style={{ alignItems: 'center', marginBottom: 12, }}>
          <Switch value={ isDone }
                  onValueChange={ value => setDone( value )}
                  style={{ marginRight: 8, }}  
                  />
          <Text>할 일 목록</Text>
        </Row>
    )
}
export default TodoItem;    