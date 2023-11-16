import { LocationObject } from "expo-location";

export type Log = {
  date: string; // 사건 발생 시각,2011-10-05T14:48:00.000Z
  message: string; // SMS로 전송된 내용
  location: LocationObject; // SMS 전송 당시 위치
  destination: string; // SMS를 보낸 곳
  id: string; // 로그 id
};

export const logs: Log[] = [
  {
    date: "2011-10-05T14:48:00.000Z",
    message: "테스트 메세지",
    location: {
      timestamp: 123,
      coords: {
        latitude: 123,
        accuracy: 1,
        altitude: 123,
        altitudeAccuracy: 1,
        heading: 1,
        longitude: 123,
        speed: 23,
      },
    },
    destination: "test destination",
    id: "1",
  },
  {
    date: "2023-10-05T14:48:00.000Z",
    message: "테스트 메세지2",
    location: {
      timestamp: 123,
      coords: {
        latitude: 123,
        accuracy: 1,
        altitude: 123,
        altitudeAccuracy: 1,
        heading: 1,
        longitude: 123,
        speed: 23,
      },
    },
    destination: "test destination",
    id: "2",
  },
  {
    date: "2023-10-12T14:48:00.000Z",
    message: "테스트 메세지3",
    location: {
      timestamp: 123,
      coords: {
        latitude: 123,
        accuracy: 1,
        altitude: 123,
        altitudeAccuracy: 1,
        heading: 1,
        longitude: 123,
        speed: 23,
      },
    },
    destination: "test destination",
    id: "3",
  },
];
