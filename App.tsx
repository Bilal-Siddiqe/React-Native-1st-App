import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native'
import React from 'react'
import Nav from './Nav'

const App = () => {
  let arr = [user, 'imag2', 'imag2'];


  return (
    <>
      <Nav title='I am Navbar'/>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center'
        }}
      >
        <View style={{
            backgroundColor: 'blue',
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ marginTop: 50 }}> </Text>
          <TextInput style={{ backgroundColor: 'white', width: '50%', borderWidth: 2, marginLeft: 50, marginTop: 50 }} value={user}></TextInput>

          <Button title='Click' onPress={() => { console.log("Hello") }} />
        </View>
        <View style={{
          backgroundColor: 'green',
          flex: 0.25,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          flexDirection: 'row-reverse'
        }}>
          <View>
            {
              arr.map((index, indexNumber) => {
                return (
                  <>
                    <Text>{index}</Text>
                    < Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }} style={{ height: 100, width: 100 }} />
                  </>

                )
              })
            }
          </View>
        </View >
      </View>
    </>
  )
}
export default App