import React, {Component} from 'react'
import {View, Button, TextInput} from 'react'

export default class Screen1 extends Component{
    render(){
        <View style={{flex:2, justifyContent:'centre', padding:20}}>
            <Text Style={{fontSize:25}}>
                Your username is { this.props.naviation.state.parmas.Parameter}
            </Text>
        </View>
    }
}