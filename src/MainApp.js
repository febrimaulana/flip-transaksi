import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from './constants';
import Routing from './routings';
import {Root} from 'popup-ui';

const MainApp = () => {
  LogBox.ignoreLogs([
    'Require cycle:',
    'Setting a timer',
    "Can't perform a",
    'VirtualizedLists should never be nested',
  ]);

  return (
    <Root>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          <Routing />
        </SafeAreaView>
      </NavigationContainer>
    </Root>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
