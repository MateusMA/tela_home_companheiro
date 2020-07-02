//Recursos do React/React Native
import React, { useState } from 'react'
import { StyleSheet, Button, Text, View, Image, TouchableWithoutFeedback} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import Carousel from 'react-native-anchor-carousel';

//Importando componente de fontes
import * as Font from 'expo-font'

//Importando AppLoading para load de recursos
//e LinearGradient para background
import { AppLoading } from 'expo'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

const TelaHomeCompanheiro = (props) => {

    //Interações com state
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    //Código para carregamento das fontes antes da renderização
    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                //startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    }

    // async function loadResourcesAsync() {
    //     await Promise.all([
    //         Font.loadAsync({
    //             'montserrat-regular-texto': require('../../assets/fonts/montserrat/Montserrat-Regular.ttf'),
    //             'montserrat-titulo': require('../../assets/fonts/montserrat/Montserrat-Light.ttf'),
    //             'montserrat-titulo-magro': require('../../assets/fonts/montserrat/Montserrat-Thin.ttf'),
    //             'montserrat-negrito': require('../../assets/fonts/montserrat/Montserrat-SemiBold.ttf')
    //         }),
    //     ]);
    // }

    function handleLoadingError(error) {
    console.warn(error);
    }

    function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
    }

    const data = [
        {
          title: 'Me ajude com às compras',
          horario: '10:20am até 11:20am',
          dia:'11 de fevereiro, 2019',
          local:'Rua Santa Barbara, SP'
        },
        {
          title: 'Me ajude com às compras',
          horario: '10:20am até 11:20am',
          dia:'11 de fevereiro, 2019',
          local:'Rua Santa Barbara, SP'
        }
      ];

    const { rating } = this.props;

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback style={styles.button_disponibilidade} onPress={() => {
                alert('Parabéns, você pressionou um botão');
            }} title="status:Disponível">

            </TouchableWithoutFeedback>
            
            <Carousel style={styles.carousel}
                data={data}
                itemWidth={200}
                containerWidth={width - 20} 
                separatorWidth={20}
                ref={(c) => {
                    this._carousel = c;
                }}
                pagingEnable={true}
            />
            
            <TouchableOpacity style={[styles.item]}
                              onPress={() => {
                                  this._carousel.scrollToIndex(index);
                              }}>
                 
            </TouchableOpacity>
            
            <Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;

            )

            

        </View>   
      )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    texto: {
        color: "#005E80",
        /**  fontFamily: "montserrat-regular-texto", **/
        fontSize: 25,
        textAlign: 'center',
        margin: 30
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    button_disponibilidade: {
        width: 40,
        height: 40,
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        position: 'absolute'
    },
    carousel: {
        height: 200,
        flex: 1,
        backgroundColor: '#000000' 
    } 

})

export default TelaHomeCompanheiro