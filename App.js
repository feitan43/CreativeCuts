import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login  from './screens/Login'
import Signup  from './screens/Signup'
import Start  from './screens/start'
import Barbershop  from './screens/Barbershop'
import Calendar from './screens/calendar'


import Tabs from './navigators/tabs';



const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    }
    
}

    const App = () => {
        const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
      
          })
          
          if(!loaded){
            return null;
          }
            
      return (
          <NavigationContainer theme={theme}>
              <Stack.Navigator  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Login'}
              >
            <Stack.Screen name="Home"  component={Tabs}/>
             <Stack.Screen  name="Login"  component={Login}/>
            <Stack.Screen  name="Start"  component={Start}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Barbershop" component={Barbershop}/>
            <Stack.Screen name="Calendar" component={Calendar}/>
              </Stack.Navigator>
          </NavigationContainer>
      )
                
}

export default App