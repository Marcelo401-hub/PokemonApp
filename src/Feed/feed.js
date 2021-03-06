import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Button, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import TelaB from './../../src/TelaB/TelaB';


export default function Feed(){

  const[pokemons, setPokemons] = useState([]);
  const navigation = useNavigation();
 

  useEffect(()=> {
      fetch("https://pokeapi.co/api/v2/pokemon", {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
          setPokemons(data.results)
      })
  }, [])

  return (
    <SafeAreaView>
        <TextInput
         placeholder="Pesquise seu Pokemon"
         style={{
          height: 40,
          borderColor: '#131313',
          borderWidth: 1,
          borderRadius: 15,
          marginTop: 15,
          marginEnd: 15
          

         }}
        />
        <FlatList 
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          contentContainerStyle={{ flexGrow: 1}}
          renderItem={PokemonShow}   
        /> 

      
    </SafeAreaView>
  )
}


 


function PokemonShow(item){

   

    const {name, url} = item.item

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

    const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokemonNumber + '.png' 
   
   
    return(

        <View style={{flexDirection: 'column-reverse'}}>
          <TouchableOpacity>
            <Image
             style={{
               width: 350,
                height: 350,
                 justifyContent: 'center'
              }} 
              source={{uri:  imageUrl}}
              
              />
          </TouchableOpacity>

            <Text >{name}</Text>
        </View>
    )

}
