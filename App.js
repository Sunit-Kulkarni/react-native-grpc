import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const { PingPongServiceClient } = require('./ping_pong_grpc_web_pb');
const { PingRequest, PongResponse } = require('./ping_pong_pb.js');

const client = new PingPongServiceClient('http://localhost:9090', null, null);
const callGrpcService = () => {
  const request = new PingRequest();
  request.setPing('Ping');

  client.pingPong(request, {}, (err, response) => {
    if (response == null) {
      console.log(err)
    }else {
      console.log(response.getPong())
    }
  });
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Button title="GRPC" onPress={() => callGrpcService()}>Click for grpc request</Button>
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
