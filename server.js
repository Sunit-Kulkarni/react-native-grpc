const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const server = new grpc.Server();

const packageDefinition = protoLoader.loadSync(
  './ping_pong.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  },
);

const pingPongProto = grpc.loadPackageDefinition(packageDefinition).pingpong;

const pingPong = (call, callback) => {
  console.log('Request', call.request);
  return callback(null, { pong: 'Pong' });
};

server.addService(pingPongProto.PingPongService.service, {
  pingPong,
});

server.bind('localhost:8080', grpc.ServerCredentials.createInsecure());
server.start();

console.log('Server started ...');
