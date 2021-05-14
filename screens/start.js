import React from 'react'
import { Button } from 'react-native';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import styled from 'styled-components';
import { COLORS, FONTS, images, SIZES } from '../components';
import Home from './Home';

const Start = ({navigation}) => {

    return(
        <SafeAreaView  style={styles.container}>

            <View style={{ flex: 60, alignment: 'center', justifyContent: 'center' }}>
                        <Image
                        source={images.backg}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            resizeMode: 'cover',
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%',
                            marginTop: 50,
                        }}
                        />
            </View>

                    <View style={{ alignment: 'center', justifyContent: 'center', marginBottom: 10 }}></View>
                        <View style={{alignmentItems: 'center', marginHorizontal: SIZES.padding, marginLeft: 80}}>     
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>GET STARTED</Text>
                        
                      </TouchableOpacity>
                        </View>
      
        </SafeAreaView>
        
    )}
    

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: COLORS.white
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 100,
        width: '70%',
    },
        buttonText: {
            fontSize: 25,
            
        }
        
})

export default Start