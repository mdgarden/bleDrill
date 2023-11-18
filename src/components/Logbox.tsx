import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

type Log = {
  date: string;
  message: string;
  locations: string;
};
type Props = {
  logs: Log[];
};

const Logbox = ({ logs }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {logs.map((log) => (
          <>
            <Text style={styles.text}>log.date</Text>
            <Text style={styles.text}>log.message</Text>
            <Text style={styles.text}>log.locations</Text>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Logbox;
