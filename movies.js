import { Card,Button,Icon  } from "@rneui/themed";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text ,View ,StyleSheet} from "react-native";
import { ScrollView } from 'react-native';
function Movies({navigation}){
    const[movie, setMovies] = useState([]);
    useEffect(()=>{
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1 ')
        .then(function(res){
            setMovies(res.data.results)
        })
        .catch(function(err){

        })
    },[])
    return(
        <>  
        <ScrollView>
            <View style={styles.container}>
            {
                movie.map((movie)=>{
                    return(
                    <Card key={movie.id} style={styles.card}>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{uri:`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}}
                        />
                        <Card.Title>Realease Data: {movie.release_date}</Card.Title>
                        <Button
                            id={movie.id}
                            buttonStyle={{
                            borderRadius: 10,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor:'#000'
                            }}
                            title="More Details"
                            onPress={()=> navigation.navigate("details",{
                                movieid:movie.id
                            })}
                        />
                    </Card>
                    )
                })
            }
            </View>
            </ScrollView>  
        </>
    )
}
const styles = StyleSheet.create({
    container: {
       
    },
    card:{
        backgroundColor:'#fea',
        borderRadius:20
    }
});

export default Movies