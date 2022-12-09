export const fetchData = () => ({
  type: "API_PENDING",
});

export const fetchSuccess = (data) => ({
  type: "API_SUCCESS",
  payload: data,
});

export const fetchError = (error) => ({
  type: "API_ERROR",
  payload: error,
});


export const setHistory=(data)=>({
  type:"SET_HISTORY_DATA",
  payload:data,
})

export const removeData=(id)=>({
  type:"DELETE_HISTORY_DATA",
  payload:id,
})