import React from 'react';
import {Text, View, StyleSheet} from 'react-native'


export default class inScreen extends React.Component{
render(){
return(
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Text style = {styles.inText}>Instagram 👍</Text>
</View>
)
}
}

const styles = StyleSheet.create({
inText:{
fontSize:30,
color: 'blue',
fontWeight: 'bold',
}
})
