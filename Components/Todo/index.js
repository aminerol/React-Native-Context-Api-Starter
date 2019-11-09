import React from 'react'
import { Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import uuid from 'uuid/v4';
import {loremIpsum} from 'lorem-ipsum';

import styles from '../../Styles'
import { useTodo } from './index.hooks';

export default function Todo() {
  const [{todos, loading, error}, {addTodo, resetTodoState}] = useTodo()
  function Item({ item }) {
    return (
      <Text style={styles.paragraph}>{item.title}</Text>
    );
  }

  return (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={()=>{ addTodo( {id: uuid(), title: `${loremIpsum({count: 2, units: 'words'})} todo`} ) }}>
            <Text style={styles.paragraph}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ resetTodoState() }}>
            <Text style={styles.paragraph}>Clear</Text>
          </TouchableOpacity>
        </View>
        { loading ? <ActivityIndicator size='large' /> : 
          <FlatList
            data={todos}
            keyExtractor={(_, index)=> index.toString()}
            renderItem={({ item }) => <Item item={item} />}
          >
          </FlatList>
        }
      </View>
  );
}