import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  let arr = [1, 2, 3, 4, 5, 6]
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <Text style={{}}> </Text>
          <TextInput style={{ backgroundColor: 'white', width: '50%' }} ></TextInput>
          <View style={{margin:5, flexDirection:'row'}}>
            <Button 
              title="Next"
              onPress={() => navigation.navigate('DetailsScreen')}
            />
            <Button  color='red' title='Cancel' onPress={() => { console.log("Hello") }} />
          </View>

        </View>
        <View style={{
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            arr.map((index, indexNumber) => {
              return (
                <>
                  < Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }} style={{ height: 100, width: 100, margin: 8 }} />
                </>

              )
            })
          }

        </View >
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;