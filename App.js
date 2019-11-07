import React from 'react';
import { View } from 'react-native';
import styles from './Styles'

import { TimeState } from './Context/Time'
import Time from './Components/Time'

import { TodoState } from './Context/Todo';
import Todo from './Components/Todo/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoState>
          <Todo />
        </TodoState>

        <TimeState>
          <Time />
        </TimeState>
      </View>
    );
  }
}
