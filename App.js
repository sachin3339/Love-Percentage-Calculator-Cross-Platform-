import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Appbar,Button} from 'react-native-paper';
import Display from './Components/Display';
class App extends React.Component{
state={
fname:"",
cname:"",
result:"Loading Love"
}

submit(){
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname= ${this.state.fname} &sname=${this.state.cname}`,{
      headers:{
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    "x-rapidapi-key":"5c7234d604mshc5a58d5c18d5ae3p178bcejsn46e9c8607b1a"
      }
    })
.then(data=>data.json()) 
.then(data2=>{
  console.log(data2)
  this.setState({
    result:data2
  })
})
}

render(){
    return (
      <View style={styles.container}>
         <Appbar.Header>
    
        <Appbar.Content
          title="Love calculator"
          subtitle="Know your Love strength"
          style={{alignItems:"center"}}
        />
      
      </Appbar.Header>



        <TextInput
        label='your Name'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />

    <TextInput
        label='Crush name'
        value={this.state.cname}
        onChangeText={text => this.setState({ cname:text })}
    />
   <Button icon="" 
   mode="contained" 
   style={{margin:10}}
   onPress={this.submit.bind(this)}>
    Calculate
  </Button>

<Display data={this.state.result}/>
   
    </View>



    );
}


  
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
