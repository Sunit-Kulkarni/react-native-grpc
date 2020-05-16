import React from 'react';
import {
  Button, Platform, StyleSheet, Text, View,
} from 'react-native';

const { PingPongServicePromiseClient } = require('./ping_pong_grpc_web_pb');
const { PingRequest } = require('./ping_pong_pb.js');

// Use http://localhost:9090 when using local browser
// Use http://192.168.1.126:9090 when using iOS or Android
const serverUrl = Platform.OS === 'web' ? 'http://localhost:9090' : 'http://192.168.1.126:9090';
const promiseClient = new PingPongServicePromiseClient(serverUrl, null, null);
const callGrpcServicePromise = async () => {
  const request = new PingRequest();
  request.setPing('Ping');
  try {
    const result = await promiseClient.pingPong(request, {});
    console.log('this is the result', result.getPong());
  } catch (error) {
    console.error(error);
  }
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Button title="GRPC" onPress={() => callGrpcServicePromise()}>Click for grpc request</Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
