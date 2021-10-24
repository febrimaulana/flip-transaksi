import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Gap,
  InputSearch,
  KeyboardViewGlobal,
  List,
  ModalSort,
} from '../../components';
import {hp, wp} from '../../constants';
import {findAllTransaksi} from '../../redux';
import {formatDate, showErrorToas} from '../../utils';

const ListTransaksi = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.global);
  const {transaksi} = useSelector(state => state.transaksi);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(transaksi);
  const [sortActive, setSortActive] = useState('URUTKAN');

  useEffect(() => {
    const transaksi = async () => {
      try {
        const result = await dispatch(findAllTransaksi());
        setData(result);
      } catch (e) {
        showErrorToas('Oops', e.message);
      }
    };

    transaksi();
  }, []);

  const onRefresh = async () => {
    try {
      const result = await dispatch(findAllTransaksi());
      setData(result);
    } catch (e) {
      showErrorToas('Oops', e.message);
    }
  };

  const onSearch = async value => {
    const searchReq = new RegExp(value, 'i');
    const search = transaksi.filter(
      item =>
        searchReq.test(item.sender_bank.toLowerCase()) ||
        searchReq.test(item.beneficiary_bank.toLowerCase()) ||
        searchReq.test(item.beneficiary_name.toLowerCase()) ||
        searchReq.test(item.amount),
    );
    setData(search);
  };

  const onSort = value => {
    setSortActive(value);
    setModal(false);
    const result = transaksi.sort((a, b) => {
      if (value === 'Nama A-Z') {
        if (a.beneficiary_name > b.beneficiary_name) {
          return 1;
        }
        if (a.beneficiary_name < b.beneficiary_name) {
          return -1;
        }
      } else if (value === 'Nama Z-A') {
        if (a.beneficiary_name < b.beneficiary_name) {
          return 1;
        }
        if (a.beneficiary_name > b.beneficiary_name) {
          return -1;
        }
      } else if (value === 'Tanggal Terlama') {
        if (formatDate(a.created_at) > formatDate(b.created_at)) {
          return 1;
        }
        if (formatDate(a.created_at) < formatDate(b.created_at)) {
          return -1;
        }
      } else {
        if (formatDate(a.created_at) < formatDate(b.created_at)) {
          return 1;
        }
        if (formatDate(a.created_at) > formatDate(b.created_at)) {
          return -1;
        }
      }
      return 0;
    });

    setData(result);
  };

  return (
    <KeyboardViewGlobal style={styles.page}>
      <InputSearch
        onPressSort={() => setModal(true)}
        onChangeText={onSearch}
        titleSort={sortActive}
      />
      <Gap height={hp(1)} />
      <FlatList
        refreshing={loading}
        onRefresh={onRefresh}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <List
            senderBank={item.sender_bank}
            beneficiaryBank={item.beneficiary_bank}
            beneficiaryName={item.beneficiary_name}
            amount={item.amount}
            createdAt={item.created_at}
            status={item.status}
            onPress={() => navigation.push('DetailTransaksi', item)}
          />
        )}
      />
      <ModalSort
        isVisible={modal}
        onClose={() => setModal(false)}
        onSelect={onSort}
        sortActive={sortActive}
      />
    </KeyboardViewGlobal>
  );
};

export default ListTransaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: wp(2),
  },
});
