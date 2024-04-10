import {StyleSheet, View} from 'react-native';
import {Map} from '../../components';
import {getCurrentLocation} from '../../../actions';
import {useLocationStore} from '../../store/location/useLocationStore';
import {LoadingScreen} from '..';
import {useEffect} from 'react';

export const MapScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();
  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <Map initialLocation={lastKnownLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});
