export type Peripheral = {
  id: string;
  rssi: number;
  name?: string;
  advertising: {};
};

export const devices: Peripheral[] = [
  {
    name: "device1",
    id: "1",
    rssi: 1,
    advertising: { serviceUUIDs: ["159a177c-cfad-46ee-a919-2b0760fea0df"] },
  },
  {
    name: "device2",
    id: "2",
    rssi: 2,
    advertising: { serviceUUIDs: ["994bbf18-137e-41b2-86cc-0d1d513032c5"] },
  },
  { name: "device3", id: "3", rssi: 3, advertising: {} },
  { name: "device4", id: "4", rssi: 4, advertising: {} },
  { name: "device5", id: "5", rssi: 5, advertising: {} },
  { name: "device6", id: "6", rssi: 6, advertising: {} },
  { name: "device7", id: "7", rssi: 7, advertising: {} },
  { name: "device8", id: "8", rssi: 8, advertising: {} },
  { name: "device9", id: "9", rssi: 9, advertising: {} },
  { name: "device10", id: "10", rssi: 10, advertising: {} },
  { name: "device12", id: "11", rssi: 11, advertising: {} },
  { name: "device13", id: "12", rssi: 12, advertising: {} },
  { name: "device14", id: "13", rssi: 13, advertising: {} },
  { name: "device15", id: "14", rssi: 14, advertising: {} },
  { name: "device16", id: "15", rssi: 15, advertising: {} },
  { name: "device17", id: "16", rssi: 16, advertising: {} },
  { name: "device18", id: "17", rssi: 17, advertising: {} },
  { name: "device11", id: "18", rssi: 18, advertising: {} },
  { name: "device20", id: "19", rssi: 19, advertising: {} },
  { name: "device21", id: "20", rssi: 20, advertising: {} },
];
