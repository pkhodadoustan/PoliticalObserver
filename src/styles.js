import {StyleSheet} from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#d6d5d6',
  paleGreen: '#03e17e', //'#03fc94'
  polRed: '#cf3634',
  polDarkRed: '#B42033',
  polWhite: '#FEFEFE',
  polVeryLightBlue: '#7ea4b6',
  polLightBlue: '#66759e',
  polDarkBlue: '#3C3B6E',
  polBlue: '#057ec7',
  polLightGray: '#DFDFDF',
  polGray: '#CECECE',
  polDarkGray: '#464646',
  polGreen: '#007000',
  clear: 'rgba(255, 255, 255, 0.0)',
  gender: ['#CD6155', '#C0392B', '#A93226', '#52BE80', '#27AE60', '#229954'],
  party: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
  education: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
  ethnicity: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
};

export const colorsData = {
  age: ['#555555', '#6e6e6e', '#898989', '#a4a4a4', '#c0c0c0', '#dddddd'],
  gender: ['#02a3fe', '#ec4aa6', '#b3c0c9'],
  state: [],
  maritalStatus: ['#734aac', '#eb6223'],
  ethnicity: ['#eed2bc', '#784f34', '#fcdabf','#a66859', '#c3886b', '#ddc29f'],
  education: ['#58cced', '#49aacf', '#3a89b2', '#2b6995', '#1b4b7a', '#072f5f'],
  income: ['#b7ffbf', '#a1f1a4', '#8be389', '#73d56e', '#5ac752', '#3cb934', '#00ab08'],
  personalityType: ['#553042', '#734c5f', '#96637c','#b3889d','#44612d', '#5a753d', '#738d57','#98c26c','#1c7679', '#369497', '#50a9ab','#73cbcc','#bf8f01', '#ccad14', '#e5c82e','#f4d75c'],
  partyAffiliation: ['#3333ff', '#e91b23', '#fed106', '#00a95c','#a357de','#9ca0a3'],
};

export const dateFormats = {
  monthDayYear: 'MMMM D, YYYY',
};

export const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: colors.polWhite,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  navigationBarTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  tabBar: {
    backgroundColor: colors.polWhite,
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
  },
  tabBarIconSelected: {
    height: 40,
    width: 40,
    tintColor: colors.polBlue,
  },
  tabBarIconUnselected: {
    height: 40,
    width: 40,
    tintColor: colors.black,
  },
});
