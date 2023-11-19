import { Text, View } from 'react-native';
import { useBleplx } from '../hooks/useBle';

const ScanningScreen = () => {
  const {
    peripherals,
    isScanning,
    scannedDevices,
    connectDevice,
    selectedDevice,
    setSelectedDevice,
    connectedDevice,
  } = useBleplx();

  return <View>{isScanning ? <Text>Scanning</Text> : <Text>Scanned Device</Text>}</View>;
};

export default ScanningScreen;
