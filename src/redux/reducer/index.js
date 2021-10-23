import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';
import profile from './profile';

const reducer = {
  global: global,
  profile: profile,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profile'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
