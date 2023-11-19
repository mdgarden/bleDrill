import { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

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

  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedDevices, setScannedDevices] = useState<Device[] | null>([]);
  const [connectedDevice, setConnectedDevice] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');

  const manager = new BleManager();

  const scanDevice = async () => {
    manager.startDeviceScan(null, null, (error, scannedUUID) => {
      console.log('Scanning...');
      console.log(scannedUUID?.name && scannedUUID);
      setIsScanning(true);

      if (error) {
        console.log('error!');
        console.log(error.message);
        setIsScanning(false);
      }

      if (scannedUUID?.name?.includes('Test')) {
        console.log('found!');
        setScannedDevices([scannedUUID]);
        manager.stopDeviceScan();
        setIsScanning(false);
      }
    });
  };

  const connectDevice = () => {
    manager.connectToDevice(selectedDevice);
    setConnectedDevice(selectedDevice);
  };

  useEffect(() => {
    requestLocationPermission();
    scanDevice();
  }, []);

  return {
    peripherals,
    isScanning,
    scannedDevices,
    connectDevice,
    selectedDevice,
    setSelectedDevice,
    connectedDevice,
  };
}
