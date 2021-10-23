import {API, reducer} from '../../../constants';

export const findAllTransaksi = () => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await API.get('frontend-test');
    const value = [];
    Object.keys(result.data).map(key => {
      value.push(result.data[key]);
    });
    dispatch({type: reducer.TRANSAKSI, value: value});
    return value;
  } catch (e) {
    const error = e.response.data;
    throw error;
  } finally {
    dispatch({type: reducer.LOADING, value: false});
  }
};
