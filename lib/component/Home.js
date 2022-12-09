import React, {useEffect, useState} from 'react';
import {View,Text,ActivityIndicator,StyleSheet,ImageBackground,TextInput,Alert,Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiActionCreator from '../actions/ApiActionCreator';
import WeatherData from './WeatherData';
//import { setHistory } from '../actions/HistoryAction';


const Home = () => {
  const dispatch = useDispatch();
  //const loading = useSelector(state => state.apiReducer.loading);
  const error=useSelector(state=>state.apiReducer.error)
  const data = useSelector(state => state.apiReducer.data);
 
  const [load, setLoad] = useState(false);
  const [city, setCity] = useState();

  let handleSubmit=()=>{
    if(city)
    setLoad(true)
    else{
      Alert.alert("              Please Enter Valid City")
    }
  }
  useEffect(() => {
    getData();
  }, [load]);


  const getData = () => {
    dispatch(apiActionCreator(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4455ad5a672540d2f63c9120897295a`),);
    setLoad(false)
  
    setCity('')
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        
        <View style={styles.container}>

          <ImageBackground style={styles.image} source={ require('../asset/background/bgimage4.png')}>
          
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search By City"
                value={city}
                onChangeText={value => setCity(value)}
              />
              <Text style={styles.button} onPress={handleSubmit}>
                Search
              </Text>
        </View>

        {  /*error?Alert.alert("no data found"):""*/}
        <WeatherData/>
          </ImageBackground>
        </View> 
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    position:'absolute'
  },
  input: {
    width: '60%',
    borderColor:'white',
    color:'white',
    borderWidth: 1,
    margin: 20,
    fontSize: 25,
    padding: 10,
    borderRadius: 10,
    fontWeight:'350'  
  },
  button: {
    backgroundColor: '#274863',
    height: 55,
    width: '25%',
    fontSize: 25,
    borderRadius: 10,
    color: 'white',
    padding: 6,
    paddingLeft:10,
    marginTop: 18,
    fontWeight:'500'
  },  
});
export default Home;
/**{
              uri: 'https://i.pinimg.com/236x/c7/cd/64/c7cd64c8bd187ac65d37e0175fd24aa4--emoji-wallpaper-tumblr-wallpaper.jpg?nii=t',
            } 
            
            require('./assets/backgroundImage.jpeg')
            ../../assets/background/bgimage4.png
            */