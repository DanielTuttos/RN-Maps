import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {StackNavigation} from './presentation/navigation/StackNavigation';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
