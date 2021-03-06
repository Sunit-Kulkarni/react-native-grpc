# gRPC-Web Expo React Native Hello World Guide

NOTE: This repo is inspired from [this repo](https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/helloworld/README.md)

When you have both `protoc` and `protoc-gen-grpc-web` installed, you can now
run this command:

```sh
$ protoc -I=. ping_pong.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

After the command runs successfully, you should now see two new files generated
in the current directory:

 - `ping_pong_pb.js`: this contains the `PingRequest` and `PongResponse`
   classes
 - `ping_pong_grpc_web_pb.js`: this contains the `PingPongServiceClient` class

## Run the Example!

We are ready to run the Hello World example. The following set of commands will
run the 3 processes all in the background.

 1. Install required node modules.

 ```sh
 $ yarn install
 ```

 1. Run the NodeJS gRPC Service. This listens at port `:8080`.

 ```sh
 $ node server.js &
 ```

 2. Run the Envoy proxy. The `envoy.yaml` file configures Envoy to listen to
 browser requests at port `:9090`, and forward them to port `:8080`

 ```sh
 $ docker build -t envoy-grpc .
 $ docker run -p 9090:9090 envoy-grpc
 ```
 3. When these are all ready, you can open another terminal window and run
 ```sh
 yarn start
 ```

Open up the Expo app on Android or iOS and scan the QR code. Push the GRPC button and the terminal windows for the client and server should say `Pong` and `Request` respectively

