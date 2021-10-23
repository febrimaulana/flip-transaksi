import {API, reducer} from '../../../constants';

export const findAllTransaksi = () => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await API.get('frontend-test');
    return result.data;
  } catch (e) {
    const error = e.response.data;
    throw error;
  } finally {
    dispatch({type: reducer.LOADING, value: false});
  }
};
