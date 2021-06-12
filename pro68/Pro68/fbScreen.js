import React from 'react';
import {Text, View, StyleSheet} from 'react-native'


export default class fbScreen extends React.Component{
render(){
return(


<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Text style = {styles.fbText}>Facebook 📱</Text>
</View>
)
}
}

const styles = StyleSheet.create({
fbText:{
fontSize:30,
color: 'blue',
fontWeight: 'bold',
}
})
