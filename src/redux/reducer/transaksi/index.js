import {reducer} from '../../../constants';

const initialStateRoot = {
  transaksi: [],
};

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.TRANSAKSI:
      return {
        ...state,
        transaksi: action.value,
      };
    default:
      return state;
  }
};

export default global;
