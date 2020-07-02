import * as React from 'react';
import { 
  Platform, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  ScrollView, 
  Item, 
  Text, 
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import ImageCarousel from './ImageCarousel';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window'); 
let nome_user = 'Alberto';

export default function App() {
  return (
    <View style={styles.container}>

      <LinearGradient style={styles.gradient} 
        colors={['rgba(0,50,99,1.0)', 'rgba(0,150,2000,0.5)', 'white']}/>

      <Text style={styles.textWelcome}>Olá {nome_user}</Text>

      <TouchableWithoutFeedback onPress={() => {
          alert('Atualizando status...');
      }}>

        <View style={styles.button_disponibilidade}>

          <Text>Disponível</Text>

        </View>

      </TouchableWithoutFeedback>  

      <View style={styles.carouselContainer2}>
          <ImageCarousel/>
      </View>

      <View style={styles.containRating}>
        <Rating
          imageSize={25}
          readonly
          //startingValue={rating} 
          style={styles.rating} />
          <Text style={styles.textLegenda}>Nota Pessoal</Text>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop:20,
  },
  textWelcome: {
    color: '#ffffffcc',
    marginBottom: 5,
    alignSelf:'flex-start',
    marginStart: 8,
    opacity: 0.5,
    fontSize: 20
  },
  button_disponibilidade:{
    width: 100,
    height: 25,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#5555ff',
    marginBottom: 50,
    marginEnd: 8,
    marginVertical: -40,
    alignSelf:'flex-end'
},
carouselContainer2:{ 
  width: width,
  height:width*0.99,
  marginBottom:30,
}, 
containRating:{
  width: 250,
  alignItems:'center',
},
rating:{
  height: 25,
  width: 100
},
textLegenda:{
  width: 100,
  alignSelf: 'center',
  textAlign: 'center'
},
gradient:{
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: 490,
}
});
