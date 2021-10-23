import {APIBEARER, reducer} from '../../../constants';

export const getProductCategory = token => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBEARER(token).get(
      '/v1/product/read/category-product/daging-ayam',
    );
    return result.data.data;
  } catch (e) {
    const error = e.response.data;
    throw error;
  } finally {
    dispatch({type: reducer.LOADING, value: false});
  }
};

export const getCategory = token => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBEARER(token).get('/api/product/v1/category/read');
    return result.data.data;
  } catch (e) {
    const error = e.response.data;
    throw error;
  } finally {
    dispatch({type: reducer.LOADING, value: false});
  }
};

export const getAllProduct = (token, page, limit) => async dispatch => {
  try {
    dispatch({type: reducer.LOADING, value: true});
    const result = await APIBEARER(token).get(
      `/api/product/v1/product/filter/${page}/${limit}`,
    );
    return result.data.data;
  } catch (e) {
    throw e.response.data;
  } finally {
    dispatch({type: reducer.LOADING, value: false});
  }
};
