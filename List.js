import { Card } from "@rneui/themed";
import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

function List ({item, deleteItem }){
    return(
            <Card> 
            <View style={styles.list}>
                <Text style={{fontSize: 25}}> {item.value} </Text>
                <MaterialCommunityIcons size={30} name="delete" color='red' style={{marginTop:2}}
                    onPress={() => deleteItem(item.key)}/> 
            </View>
            </Card>
    )
}

const styles = StyleSheet.create({
    list:{
        display:'flex',
        width:350,
        flexDirection:'row',
        borderBottomColor:'#dde',
        borderBottomWidth:3,
        height:40,
    },
});

export default List;