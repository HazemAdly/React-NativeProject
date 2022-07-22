import React, { useState } from "react";
import { FlatList, Text, View,StyleSheet } from "react-native";
import Input from "./input";
import List from "./List";

function Todo (){
    const [data, setData] = useState([])

    const submitHandler = (value) => {
        setData((prevData) => {
            return [
                {
                    value: value,
                    key: Math.random().toString(),
                }, 
                ...prevData,
            ]
        })
    }

    const deleteItem = (key) => {
        setData((prevTodo) => {
            return prevTodo.filter((todo) => todo.key != key)
        })    
    }


    return(
        <View style={styles.container}> 
            <Text> ToDo App </Text>
            <Input submitHandler={submitHandler} />
            <FlatList 
                data= {data}
                renderItem = {({item}) => 
                <List  item={item} deleteItem={deleteItem}  />}
            /> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:0,
        backgroundColor:'#fed',
        height:'100%'
    },
})

export default Todo;