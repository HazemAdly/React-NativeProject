import { Card } from "@rneui/themed";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button } from '@rneui/base';


function Input ({submitHandler}){
    const [value, setValue] = useState("")

    const saveText = (text) => {
        setValue(text);
    }

    return(
        <Card>
        <TextInput placeholder="Add" style={{fontSize:20,marginBottom:10}}
            onChangeText={saveText}
            />
        <Button  
            buttonStyle={{
                backgroundColor: 'blue',
                borderRadius: 3,
            }}  
            titleStyle={{
                color: '#dee',
                marginHorizontal: 20,
                fontSize:20
            }} 
            title="Add" onPress={() => submitHandler(value)} 
            /> 
        </Card>
    )
}


export default Input;