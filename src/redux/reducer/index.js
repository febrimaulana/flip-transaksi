import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';
import transaksi from './transaksi';

const reducer = {
  global: global,
  transaksi: transaksi,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
