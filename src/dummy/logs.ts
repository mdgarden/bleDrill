// import { LocationObject } from 'expo-location';
import GetLocation, { Location } from 'react-native-get-location';

export type Log = {
  date: string; // 사건 발생 시각,2011-10-05T14:48:00.000Z
  message: string; // SMS로 전송된 내용
  location: Location; // SMS 전송 당시 위치
  destination: string; // SMS를 보낸 곳
  id: string; // 로그 id
};

export const logs: Log[] = [
  {
    date: '2011-10-05T14:48:00.000Z',
    message: '테스트 메세지',
    location: {
      latitude: 123,
      longitude: 123,
      altitude: 123,
      accuracy: 1,
      speed: 23,
      time: 1,
    },
    destination: 'test destination',
    id: '1',
  },
  {
    date: '2023-10-05T14:48:00.000Z',
    message: '테스트 메세지2',
    location: {
      latitude: 123,
      longitude: 123,
      altitude: 123,
      accuracy: 1,
      speed: 23,
      time: 1,
    },
    destination: 'test destination',
    id: '2',
  },
  {
    date: '2023-10-12T14:48:00.000Z',
    message: '테스트 메세지3',
    location: {
      latitude: 123,
      longitude: 123,
      altitude: 123,
      accuracy: 1,
      speed: 23,
      time: 1,
    },
    destination: 'test destination',
    id: '3',
  },
];
