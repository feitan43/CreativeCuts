import React from 'react'
import { Image } from 'react-native'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import {TextLink, TextLinkContent, ExtraText, ExtraView} from './../components/stylesss'
import { FONTS, images } from '../components'
import firebase from './../firebase/fire'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: ''
    }
    handleLogin = () => {
        const { email, password, error } = this.state
        

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Start'))
            .catch(error => this.setState({errorMessage: error.message})
            );
    }
    render() {
        return (
            
            <View style={styles.container}>
                

                <Image
                source={images.cc}
                resizeMode="contain"
                style={{
                    width: 350,
                    height: 350,
                }}
            />

                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <View>
                    <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
                    
                </View>
              
            
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <ExtraView>
               
               <ExtraText>Already have an account?</ExtraText>
               <TextLink onPress={() => this.props.navigation.navigate('Signup')}>
                   <TextLinkContent>  Sign up</TextLinkContent>
               </TextLink>
          
           </ExtraView>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 5,
        borderRadius: 15,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Login