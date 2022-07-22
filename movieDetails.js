import axios from "axios";
import React, { useState } from "react";
import { Card,Button,Icon  } from "@rneui/themed";
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
function Details(navigation ){ 
    const route = useRoute();
    const [movie, setMovie] = useState({})
        axios
        .get(`https://api.themoviedb.org/3/movie/${route.params.movieid}?api_key=768ed5a9c272e9df7ee6d6d1d1d7552a`)
        .then((res)=>{
            setMovie(res.data)
        })
    return(
        <Card key={movie.id} style={styles.card}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Image
                style={{ padding: 0 }}
                source={{uri:`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}}
            />
            <Card.Title>Realease Data: {movie.release_date}</Card.Title>
            <Card.Title>{movie.overview}</Card.Title>
            <Card.Title>Rating</Card.Title>
            <Card.Title>{movie.vote_average}</Card.Title>
            </Card>
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
export default Details