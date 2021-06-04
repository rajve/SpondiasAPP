import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
    state = {
       myState: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"    
    }
    updateState = () =>this.setState({ myState: 'The state is updated' })
    render() {
       return (
          <View>
             <Text onPress = {this.updateState}>
                {this.state.myState}
             </Text>
          </View>
       );
    }
 }
 export default Home;
