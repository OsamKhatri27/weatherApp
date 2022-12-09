// import axios from 'axios';
// import {fetchingData,fetchSuccess,fetchError} from "./ApiAction"

// const apiActionCreator=(url)=>(dispatch)=>{
//     dispatch(fetchingData());
//     return new Promise(()=>{
//         axios
//         .get(url)
//         .then((response)=>{
//             dispatch(fetchSuccess(response.data))
//         })
//         .catch((error)=>{
//             dispatch(fetchError(error))
//         })
//     })

// }
// export default apiActionCreator;

import axios from 'axios';
import {fetchData, fetchSuccess, fetchError,setHistory} from './ApiAction';
import {Alert} from 'react-native'

const apiActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
        dispatch(setHistory(response.data))
     
      })
      .catch((error) => {
       // console.log("**************************");
        //console.log(error);
       // dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;