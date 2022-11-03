import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SIZE = {
  width,
  height
}



export const fonts = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold'
  },
  p: {
    fontSize: 16,
    lineHeight: 36
  },
});