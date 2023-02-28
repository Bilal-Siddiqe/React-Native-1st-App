import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native'
import React from 'react'
import Nav from './Nav'
const Homescreen = () => {
    return (
        let arr = [
            {
                name: 'Apple'
            },
            {
                name: 'Samsung'
            },
            {
                name: 'Vivo'
            },
            {
                name: 'Revo'
            },
            {
                name: 'Infinix'
            },
            {
                name: 'Nokia'
            },
        ];

    return (
        <>
            <Nav title='I am Navbar' />
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
                    paddingBottom: 20
                }}
                >
                    <Text style={{}}> </Text>
                    <TextInput style={{ backgroundColor: 'white', width: '50%', borderWidth: 2 }} ></TextInput>

                    <View style={{ flexDirection: 'row' }}>
                        <Button title='Submit' onPress={() => { console.log("Hello") }} />
                        <Button title='Clear' onPress={() => { }} />
                    </View>


                </View>
                <View style={{
                    backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>

                    {
                        arr.map((index, indexNumber) => {
                            return (
                                <>
                                    <View>
                                        < Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }} style={{ height: 100, width: 100, margin: 10 }} />
                                        <Text style={{ textAlign: 'center' }}>{arr[indexNumber].name}</Text>
                                    </View>
                                </>
                            )
                        })
                    }

                </View>
            </View>
        </>
    )
}

export default Homescreen;