import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Swipeout from 'react-native-swipeout'
import historyActionCreator from '../actions/HistoryActionCreator'
function Explore(props) {
  const data = useSelector(state => state.historyReducer);
  const dispatch=useDispatch(); 
 
 
  let renderItems=({item})=>{
    let imageSource=''
    if(item.weather[0].main==='Clear')
    imageSource=require('../asset/icon/bluesunny.png')
    else if(item.weather[0].main==='Smoke')
    imageSource=require('../asset/icon/bluefog.png')
    else if(item.weather[0].main==='Mist')
    imageSource=require('../asset/icon/bluemist.png')
    else if(item.weather[0].main==='Haze')
    imageSource=require('../asset/icon/bluehaze.png')
    else if(item.weather[0].main==='Clouds')
    imageSource=require('../asset/icon/bluepartialcloud.png')
    let swipeBtn=[{
      text:'delete',
      backgroundColor:'red',
      underlayColor:'rgba(0,0,0,1,0.6)',
      onPress:()=>{dispatch(historyActionCreator(item.id))}
    }]
    return (
      <Swipeout
      right={swipeBtn}
      autoClose={true}
      backgroundColor='transparent'
      >
      <View style={styles.container}>
      <View>
         <Text style={styles.text}>{item.name}</Text>
      </View>

      <View style={styles.subcontainer}>
      <View style={styles.Items}>
          <Image 
             source={require("../asset/icon/bluetemp.png")}
             style={styles.icon}
          />
        <Text style={styles.text}>{item.main.temp} K</Text>
        </View>
        <View style={styles.Items}>
          <Image 
          source={imageSource}
          style={styles.icon}
          />
        <Text style={styles.text}>{item.weather[0].main} </Text>
        </View>
        </View>

      </View>
      </Swipeout>
    )
    
  }
  
    return (
      <View>
       <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderItems}
       />
      </View>  
    );
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:'#4f8aba',
      height:100,
      margin:10,
      borderRadius:10, 
    },
    subcontainer:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    Items:{
      flexDirection:'row',
    },
    text:{
      color:'black',
      padding:10,
      fontSize:20
    },
    icon:{
      height:40,width:40
    }
})
export default Explore;
/**
 * 
 *  
 * container:{
        height:"55%",
        backgroundColor:"#3b4b14",
        borderRadius:10,
        margin:15,
       
    },
    heading:{
        color:"white",
        fontSize:27,
        textAlign:"center",
        marginTop:'1%'
    },
    text:{
        fontSize:22,
        color:"white",
        fontWeight:'600',
        marginLeft:"15%"
      },
      dataContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        justifyContent:"space-around",
        
      },
      image:{
        height:90,width:90
      }
 * 
 * 
 * 
 * <View>
      <View style={styles.container}>
      <Text style={styles.heading}>{item.name}</Text>
      
      <View style={styles.dataContainer} >
        <View >
        <Image 
        source={require("../../assets/pressure.png")}
        style={styles.image}
        />
          <Text style={styles.text}>67 hpa</Text>
        </View>
    
        <View >
        <Image 
        source={require("../../assets/temperature.png")}
        style={styles.image}
        />
          <Text style={styles.text}>76 K</Text>
        </View>
      </View>
    
      <View style={styles.dataContainer} >
        <View >
          <Image 
          source={require("../../assets/humidity.png")}
          style={styles.image}
          />
          <Text style={styles.text}>67 %</Text>
        </View>
    
        <View >
        <Image 
        source={require("../../assets/rain.png")}
        style={styles.image}
        />
          <Text style={styles.text}>Rain</Text>
        </View>
      </View>
    
      </View>
    </View>)
 */