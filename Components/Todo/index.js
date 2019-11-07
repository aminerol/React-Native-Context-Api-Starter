import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import uuid from 'uuid/v4';
import {loremIpsum} from 'lorem-ipsum';

import styles from '../../Styles'
import { useTodo } from './index.hooks';

export default function Todo() {
  const [state, {addTodo}] = useTodo()

  function Item({ item }) {
    return (
      <Text style={styles.paragraph}>{item.title}</Text>
    );
  }

  return (
    <View style={{flex: 1}}>
        <TouchableOpacity onPress={()=>{ addTodo( {id: uuid(), title: `${loremIpsum({count: 2, units: 'words'})} todo`} ) }}>
          <Text style={styles.paragraph}>Add</Text>
        </TouchableOpacity>
        <FlatList
          data={state}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({ item }) => <Item item={item} />}
        >
        </FlatList>
        
      </View>
  );
}