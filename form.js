import React, { useState } from "react";
import {Text, TextInput,View} from "react-native"
import {useFormik} from "formik";
import { Button } from "@rneui/themed";

function ContactForm(){
    const [msg, setMsg] = useState("")
    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {name: '', email: '', message: ""},
        onSubmit: values => 
        setMsg('Your Opinion is' + values.message)
    })

    return(
        <View style= {{
            flex: 1,
            backgroundColor: "#ffff",
            alignItems: "center",
            justifyContent: "center",

        }}> 
            <Text style={{color: "#000", fontSize: 35, marginBottom: 20,padding:4}}> Contact Us </Text> 

            <TextInput style={{color: "#000", fontSize: 30, marginBottom: 15 ,borderBottomWidth: 2}}
                placeholder="enter name" 
                onChangeText={handleChange('name')}
             />
            <TextInput style={{color: "#000", fontSize: 30, marginBottom: 15 , borderBottomWidth: 2}}
             placeholder="enter email" 
                onChangeText={handleChange('email')}
            />
            <TextInput style={{color: "#000", fontSize: 30, marginBottom: 15 , borderBottomWidth: 2,borderTopColor:'yellow'}}
            placeholder="enter message"
                onChangeText={handleChange('message')}
                maxLength={200}
            />
            <Text style={{color: "#000", fontSize: 40, marginBottom: 20,padding:4}}> {msg}</Text> 
            <Button 
                buttonStyle={{
                    backgroundColor: 'blue',
                    borderRadius: 5,
                    marginTop:25, borderRadius: 15,
                }}  
                titleStyle={{
                    color: '#000',
                    marginHorizontal: 20,
                }} title="Submit" onPress={handleSubmit} />
                
        </View>

    )

}

export default ContactForm;