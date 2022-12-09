import React, { useState,useEffect } from 'react';
import { View ,StyleSheet,Text,Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function WeatherData(props) {
    const data = useSelector(state => state.apiReducer.data);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime,setCurrentTime]=useState('')

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      
    );
    if(hours>=12){
    setCurrentTime(
      hours + ':' + min + " pm"
    )
    }
    else 
    {
      setCurrentTime(
        hours + ':' + min + " am"
      )
    }
  }, []);

    let renderItems = () => {
      let imageSource=''
    if(data.weather[0].main==='Clear')
    imageSource=require('../asset/icon/bluesunny.png')
    else if(data.weather[0].main==='Smoke')
    imageSource=require('../asset/icon/bluefog.png')
    else if(data.weather[0].main==='Mist')
    imageSource=require('../asset/icon/bluemist.png')
    else if(data.weather[0].main==='Haze')
    imageSource=require('../asset/icon/bluehaze.png')
    else if(data.weather[0].main==='Clouds')
    imageSource=require('../asset/icon/bluepartialcloud.png')
     
        if (data) {          
          return (
            <View >
            <Text style={styles.heading}> {data.name} - {data.sys.country} </Text> 
            
           <Text style={{fontWeight:'300',fontSize:35,color:'white'}}> {currentDate}</Text>
           <Text style={{fontWeight:'300',marginTop:10,marginBottom:10,fontSize:35,color:'white'}}> {currentTime}</Text>
            
            <View style={styles.dataContainer} >
              <View >
              <Image 
              source={imageSource}
              style={{ height:40,width:57,marginLeft:30}}
              />
                <Text style={styles.text}>{data.weather[0].main} </Text>
              </View>
    
              <View >
              <Image 
              source={require("../asset/clouds.png")}
              style={styles.icon}
              />
                <Text style={styles.text}>{data.clouds.all} %</Text>
              </View>
            </View>
    
            <View style={styles.dataContainer} >
              <View >
              <Image 
              source={require("../asset/temperature.png")}
              style={styles.icon}
              />
                <Text style={styles.text}>{data.main.temp} K</Text>
              </View>
    
              <View >
              <Image 
              source={require("../asset/humidity.png")}
              style={styles.icon}
              />
                <Text style={styles.text}>{data.main.humidity} %</Text>
              </View>
            </View>
    
            <View style={styles.dataContainer} >
            <View >
            <Image 
            source={require("../asset/pressure.png")}
            style={styles.icon}
            />
              <Text style={styles.text}>{data.main.pressure} hpa</Text>
            </View>
    
            <View >
            <Image 
            source={require("../asset/icon/bluewind.png")}
            style={{  height:40,width:57,marginLeft:30}}
            />
              <Text style={styles.text}>{data.wind.speed} m/s</Text>
            </View>
          </View>
          </View>
          );
        } else console.log('No');
        return false;
      };
    return (
        <View>
        {renderItems()}
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
     // opacity: 0.9
    },
    container: {
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
    },
    input: {
      width: '60%',
      borderWidth: 1,
      margin: 20,
      fontSize: 25,
      padding: 10,
      borderRadius: 10,
      // borderColor:'white',
      fontWeight:'bold'
      
    },
    button: {
      backgroundColor: '#3b4b14',
      height: 55,
      width: '25%',
      fontSize: 25,
      borderRadius: 10,
      color: 'white',
      padding: 6,
      paddingLeft:13,
      marginTop: 18,
    },
    text:{
      fontSize:20,
      color:"white",
      fontWeight:'600',
      marginLeft:'16%'
    },
    heading:{
    //marginTop:'50%',
    marginTop:100,
      marginBottom:"7%",
      textAlign:'center',
      fontSize:40,
      fontWeight:"500",
      color:"white"
    },
    dataContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop:"4.5%", 
    },
    icon:{
    
      height:40,width:100
    }
})
export default WeatherData;