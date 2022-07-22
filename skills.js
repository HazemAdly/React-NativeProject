
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Info from './info';

export default function Skills(props) {
    return (
        <>
        <Text>Skills</Text>
        <View style={styles.left}>
            <Text style={styles.item1}>{props.skill}</Text>
            <Text style={styles.item2}>{props.value}</Text>
        </View>
        <Text            
        style={{
            width:props.width,
            color:'#fff',
            height:10,
            marginLeft:10,
            backgroundColor:'yellow',
            borderColor:'#f00',
            borderWidth:3,
            padding:3,
            borderRadius:10
            }}
            ></Text>
        </>
    );
}

const styles = StyleSheet.create({
    left:{
        textAlign:'left',
        display:'flex',
        flexDirection:'row',
        left:0,
        marginTop:10,
        marginLeft:20,
        alignItems:'flex-start',
    },
    item1:{
        color:'#fff',
        fontSize:20,
        marginRight:50,
        width:'40%',
        padding:5,
        borderRadius:10,
    },
    item2:{
        color:'#fff',
        fontSize:20,
        marginRight:50,
        width:'40%',
        padding:5,
        borderRadius:10,
        textAlign:'right'
    },
});
