import { useState } from 'react';
import { BleManager } from 'react-native-ble-plx';

export function useBleplx() {
  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState([]);
  const [discoveredDevices, setDiscoveredDevices] = useState<string[] | null>([]);
  console.log('ble plx loaded');

  const manager = new BleManager();
  console.log('manager');
  // if (manager) {
  //   manager.startDeviceScan(discoveredDevices, null, (error, scannedDevice) => {
  //     if (error) {
  //       console.log("error");
  //       throw new Error(error.message);
  //     }
  //     console.log("scannedDevice", scannedDevice);
  //     console.log("discoveredDevices-UUID", discoveredDevices);
  //     //   scannedDevice && setDiscoveredDevices([...discoveredDevices, ...scannedDevice]));
  //   });
  // }

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
  return { peripherals, isScanning, connectedDevices, discoveredDevices };
}
