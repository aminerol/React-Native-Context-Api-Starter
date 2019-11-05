import React from 'react';
import { View } from 'react-native';
import styles from './Styles'

import { TimeState } from './Context/Time';
import Time from './Components/Time'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TimeState>
          <Time />
        </TimeState>
      </View>
    );
  }
}
