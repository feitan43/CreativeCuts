import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { icons, COLORS, SIZES, FONTS } from '../components'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const createAlert = () =>
    Alert.alert(
      "Hey, Buddy",
      "Confirming your Booking Appointment",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () => BackHandler.exitApp() }
        

      ],
      { cancelable: true }
    );
    return (
      <View style={styles.container}>
        {renderHeader()}
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>


        <View
                        style={{
                          marginTop: 50,
                          padding: SIZES.padding * 2,
                          alignItems: 'center',
                          justifyContent: 'center'
                          
                        }}
                    >
                      
                           <Button title="CONFIRM BOOKING APPOINTMENT" onPress={createAlert}></Button>
               
                    </View>
                </View>
    );

    function renderHeader() {
      return (
          <View style={{ flexDirection: 'row', height: 60, marginTop: 40, marginBottom: 30 }}>
              
                  <Text style={{...FONTS.h1, marginLeft: 120, marginTop: 25}}>Calendar</Text>
                  
              </View>
          
      )
  }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});