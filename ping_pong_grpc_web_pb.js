/**
 * @fileoverview gRPC-Web generated client stub for pingpong
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pingpong = require('./ping_pong_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pingpong.PingPongServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pingpong.PingPongServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pingpong.PingRequest,
 *   !proto.pingpong.PongResponse>}
 */
const methodInfo_PingPongService_PingPong = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pingpong.PongResponse,
  /** @param {!proto.pingpong.PingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pingpong.PongResponse.deserializeBinary
);


/**
 * @param {!proto.pingpong.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pingpong.PongResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pingpong.PongResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pingpong.PingPongServiceClient.prototype.pingPong =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pingpong.PingPongService/PingPong',
      request,
      metadata || {},
      methodInfo_PingPongService_PingPong,
      callback);
};


/**
 * @param {!proto.pingpong.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pingpong.PongResponse>}
 *     A native promise that resolves to the response
 */
proto.pingpong.PingPongServicePromiseClient.prototype.pingPong =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pingpong.PingPongService/PingPong',
      request,
      metadata || {},
      methodInfo_PingPongService_PingPong);
};


module.exports = proto.pingpong;

