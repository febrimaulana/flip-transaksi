import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants';
import {Image} from '../../components';
import {DMLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ListTransaksi');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <Image image={DMLogo} center />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
