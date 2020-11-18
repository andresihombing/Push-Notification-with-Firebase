import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification'

export default class App extends Component{
  constructor(props){
    super(props);
    
  }

  async componentDidMount(){
    PushNotification.configure({      
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);    
      },                
    });
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Push Notification</Text>
      </View>
    )
  }
}