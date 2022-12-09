const ReadyState = {
    historydata:[]
  };
  
  const historyReducer = (state = ReadyState, action) => {
    switch (action.type) {
      case "SET_HISTORY_DATA":
        {
            
            let data=action.payload;
           let newData=[...state,data]        
            return newData
        }
        case "DELETE_HISTORY_DATA":{
          let newData=state.filter(item=>item.id!=action.payload)
          console.log("*******************DELETED STATE*********************");
          console.log(newData);
          return newData
          //console.log(action.payload);
        }
      default:
        return state;
    }
  };
  
  export default historyReducer;