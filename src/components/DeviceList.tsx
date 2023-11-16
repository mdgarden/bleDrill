import React from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Peripheral} from '../dummy/devices';

type ItemProps = {
  id: string;
  title: string | undefined;
  selected: boolean;
  onPress: (id: string) => void;
};

type props = {
  devices: Peripheral[];
  onPress: (id: string) => void;
  selected: string;
};

const Item = ({id, title, selected, onPress}: ItemProps) => (
  <TouchableOpacity
    onPress={() => onPress(id)}
    style={{
      ...styles.list,
      backgroundColor: selected ? 'darkcyan' : 'gainsboro',
    }}
    key={id}>
    <Text style={{...styles.device, color: selected ? 'white' : 'black'}}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function DeviceList({devices, onPress, selected}: props) {
  return (
    <>
      <Text style={styles.scannerTitle}>검색된 장치</Text>
      <FlatList
        contentContainerStyle={styles.deviceListContainer}
        data={devices}
        renderItem={({item}) => (
          <Item
            title={item.name}
            id={item.id}
            selected={item.id === selected}
            onPress={onPress}
          />
        )}
        keyExtractor={device => device.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    margin: 4,
    borderRadius: 10,
  },
  device: {
    fontSize: 20,
  },
  deviceListContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
  },
  scannerTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
