import { View, Text } from 'react-native'
import React from 'react'

const Nav = (props) => {
  return (
    <View style={{flex:0.05, justifyContent:'center', alignItems:'center'}}>
      <Text>{props.title}</Text>
    </View>
  )
}
export default Nav;