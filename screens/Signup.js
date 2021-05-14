import React, {useState} from 'react' ;
import { View, TextInput, StyleSheet, TouchableOpacity, Text,  } from 'react-native';
import {TextLink, TextLinkContent, ExtraText, ExtraView} from './../components/stylesss'
import {Button, Input} from 'react-native-elements';
import { FONTS } from '../components';
import firebase from './../firebase/fire';

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: ''
    }
    handleSignUp = () => {
        const { email, password, error} = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => this.setState({errorMessage: error.message})
            );
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...FONTS.h1, marginRight: 200, marginLeft: 30, marginBottom: 50}}>Create an Account</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Full Name'
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
                
               <ExtraView>
               
                                 <ExtraText>Already have an account?</ExtraText>
                                 <TextLink onPress={() => this.props.navigation.navigate('Login')}>
                                     <TextLinkContent>  Sign in</TextLinkContent>
                                 </TextLink>
                            
                             </ExtraView>

                 <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

           

           
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
        textAlign: 'left'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
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

export default Signup