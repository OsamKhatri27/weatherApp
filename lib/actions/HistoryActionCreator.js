
import axios from 'axios';
import {removeData} from './ApiAction';


const historyActionCreator = (id) => (dispatch) => {
  dispatch(removeData(id));
};

export default historyActionCreator;