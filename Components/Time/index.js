import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useTimeState } from '../../Context/Time';
import styles from '../../Styles'

export default function Time() {
    const [{ time, isOn }, actions] = useTimeState()
    const {toggleTime} = actions
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={()=>{
            toggleTime(!isOn)
          }}>
            <Text style={styles.paragraph}>{isOn ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
          <Text style={styles.paragraph}>{new Date(time).toLocaleString()}</Text>
      </View>
    );
  }