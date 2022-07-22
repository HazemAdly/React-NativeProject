
import { StyleSheet, Text, View } from 'react-native';

export default function Info(props) {
    const info = [
        {
            name: 'Age',
            value:'25',
        },
        {
            name: 'Country',
            value:'Egypt',
        },
        {
            name: 'Job',
            value: 'Front-end',
        },
        ];
    return (
        <>
        <View>
                {info.map((inf, index) => {
                    return(
                        <>
                        <View key={index} style={styles.left}> 
                            <Text style={styles.item}>
                                {inf.name}
                            </Text> 
                            <Text style={styles.item}>
                                {inf.value}
                            </Text> 
                        </View>
                        </>
                    )
                } )}
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    left:{
        textAlign:'left',
        display:'flex',
        flexDirection:'row',
        left:0,
        marginTop:30,
        marginLeft:20,
        alignItems:'flex-start',
    },
    item:{
        color:'#fff',
        fontSize:20,
        backgroundColor:'blue',
        marginRight:50,
        width:'40%',
        padding:5,
        borderRadius:10,
        textAlign:'center'
    }
});
