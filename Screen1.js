import React, {Component} from 'react'
import {View, Button, TextInput} from 'react-native'
export default class Screen extends Component{
    constructor(props) {
        super(props)
            this.state={
                username:''
        };
        
    }
    render()
    {
        return
        {
            <view style={{flex:2, justifyContent:'center', padding:20}}>
                <TextInput placeholder="Enter your Username"
                   style={{borderBottomWidth:2, borderBottomColor:'blac', marginbottom:25}}
                   onChangeText={username=>this.setState({username})}>

                   </TextInput>
                     <TextInput placeholder="Enter your password"
                   style={{borderBottomWidth:2, borderBottomColor:'blac', marginbottom:25}}
                   onChangeText={username=>this.setState({username})}>

                   </TextInput>

                   <Button title="Enter"
                   onPress={()=>this.props.navigation.navigate('Screen2', {Parameter1:this.state.username})}>

                   </Button>
            </view>
        }
    }
}
