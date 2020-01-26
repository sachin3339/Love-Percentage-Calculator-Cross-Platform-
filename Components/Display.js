import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
function Display(prop) {

    if(prop.data=="loading")
    {
       
        return <Text>Loding love</Text>

        
    }
    if(prop.data.message){
        return <Text>Something went wrong</Text>
    }
    else
    {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{prop.data.percentage}</Text>
                
                <Text style={styles.text}>{prop.data.result}</Text>
            </View>
        )
    }
   
}
export default Display;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"center"
    },
    text:{
        fontSize:30,
        textAlign:"center"
    }
  });