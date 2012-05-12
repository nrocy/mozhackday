
var http = require("http"),
  io = require("socket.io"),
  sys = require("sys"),
  nodestatic = require("node-static");

var static_server = new nodestatic.Server(".");

var server = http.createServer(function(req, res) {
  var url = require("url").parse(req.url);
  var pathfile = url.pathname;

  static_server.serve(req, res);
});

server.listen(1234);

var socket = io.listen(server);
socket.on("connection", function(client) {

  console.log("connect");

  client.on("disconnect", function() {
    console.log("disconnect");
  });

  client.on("message", function(msg) {
    console.log("message");
  });

});