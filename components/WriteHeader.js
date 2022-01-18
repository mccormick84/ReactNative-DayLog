import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader() {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name={'arrow-back'}
          color={'#424242'}
        />
      </View>
      <View style={styles.buttons}>
        <TransparentCircleButton
          name={'delete-forever'}
          color={'#ef5350'}
          hasMarginRight
        />
        <TransparentCircleButton name={'check'} color={'#009698'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default WriteHeader;
