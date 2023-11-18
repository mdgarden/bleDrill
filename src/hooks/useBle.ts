import { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

export function useBleplx() {
  // Android Bluetooth Permission
  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location permission for bluetooth scanning',
          message: 'Grant location permission to allow the app to scan for Bluetooth devices',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
      } else {
        console.log('Location permission for bluetooth scanning denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  requestLocationPermission();

  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedDevices, setScannedDevices] = useState<string[] | null>([]);
  const [connectedDevice, setConnectedDevice] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');

  const manager = new BleManager();

  const scanDevice = async () => {
    // const list: string[] = [];
    manager.startDeviceScan(null, null, (error, scannedUUID) => {
      console.log('Scanning...');
      console.log(scannedUUID?.name && scannedUUID);
      // console.log(scannedUUID?.localName && scannedUUID.localName);
      // console.log(scannedUUID, uuids);
      if (error) {
        console.log('error!');
        console.log(error.message);
      }

      if (scannedUUID?.name?.includes('Test')) {
        console.log('found!');
        manager.stopDeviceScan();
      }
    });
  };
  // "id": "C4:4E:E8:0F:22:96", "isConnectable": true, "localName": null, "manufacturerData": "LQEEAAExBQPODrCIBEDVAAAAAAAA", "mtu": 23, "name": "LE_WH-1000XM4", "overflowServiceUUIDs": null, "rssi": -57, "serviceData": {"0000fe2c-0000-1000-8000-00805f9b34fb": "ADAAAAARnQ=="}, "serviceUUIDs": null, "solicitedServiceUUIDs": null, "txPowerLevel": -21}

  // const [uuids, setUuids] = React.useState([]);
  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the location');
  //       alert('You can use the location');
  //     } else {
  //       console.log('location permission denied');
  //       alert('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // requestLocationPermission();
  scanDevice();
  return { peripherals, isScanning };
}
