import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, Image ,View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '@rneui/base';
export default function Header({navigation}) {
    return (
        <>
        <View style={styles.container}>
        <ScrollView>
            <Image 
                style={styles.image}
                source={{uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg?crop=0.934xw:1.00xh;0.0337xw,0&resize=1200:*", 
                width:400,
                height:300 
                }}
            /> 
            <Text style={styles.name}>Welcome, Here You Will Find The Entertainment You Desire</Text>
            <Button  
                buttonStyle={{
                    backgroundColor: 'blue',
                    borderRadius: 3,
                    marginTop:10, borderRadius: 10,
                }}  
                titleStyle={{
                    color: '#000',
                    marginHorizontal: 20,
                }}
                title='Explore Movies' onPress={()=> navigation.navigate("movies")}></Button>
                <Text style={styles.name}>Wanna Make ToDo to Watch Later~</Text>
            <Button  
                buttonStyle={{
                    backgroundColor: 'blue',
                    borderRadius: 3,
                    marginTop:20, borderRadius: 10,
                }}  
                titleStyle={{
                    color: '#000',
                    marginHorizontal: 20,
                }}
                title='ToDO' onPress={()=> navigation.navigate("todo")}></Button>
                <Text style={styles.name}>Send Us You Opinion</Text>
            <Button  
                buttonStyle={{
                    backgroundColor: 'blue',
                    borderRadius: 3,
                    marginTop:20, borderRadius: 10,
                }}  
                titleStyle={{
                    color: '#000',
                    marginHorizontal: 20,
                }}
                title='Your Opinion' onPress={()=> navigation.navigate("form")}></Button>
                <Text style={styles.name}>Follow Us in</Text>
            <View style={styles.icons}> 
                <Ionicons name="logo-facebook" size={32} color="blue" style={styles.icon}/>
                <Ionicons name="logo-twitter" size={32} color="blue" style={styles.icon}/>
                <Ionicons name="logo-linkedin" size={32} color="blue" style={styles.icon}/>
                <Ionicons name="logo-instagram" size={32} color="blue" style={styles.icon}/>
                <Ionicons name="logo-youtube" size={32} color="blue"/>
            </View>
            </ScrollView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:0,
        backgroundColor:'#fff',
        height:'100%'
    },
    name:{
        color:'#000',
        marginTop:30,
        marginRight:20,
        marginLeft:20,
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    },
    image:{
        marginTop:0,
    },
    dec:{
        color:'#ddd',
        fontSize:17,
        marginTop:10,
        marginBottom:20,
    },
    icons:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'#ddd',
        borderBottomWidth:3,
        justifyContent:'center',
        height:60,
        width:400
    },
    icon:{
        marginRight:10,
    }
});