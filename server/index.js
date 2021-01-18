const { Socket } = require("dgram");
const WebSocket = require("ws");

//copy from utht code
const JSONParser = require("./externalSocketParser/parser");
// const digest = require("./Digester/index");
// const encapsulate = require("./Encapsulate/index");

const wss = new WebSocket.Server({ port: 8080 });
//change to a mapping with id as key and client type as value
var clientList = [];

//websocket connection
wss.on("connection", function connection(ws) {
	//websocket message
	ws.on("message", function incoming(data) {
		// parsed incoming data from sockets
		var parsedData = JSONParser(data);

		// if the socket is just connected, add it to the client list
		if (parsedData.isNew) {
			//map id to server typ here
			parsedData["socket"] = ws;
			clientList.push(parsedData);
		} else {
			clientList.forEach(function each(client) {
				if (client.socket.readyState === WebSocket.OPEN) {
					if (parsedData.serverType == "odroid") {
						// Send encapsulation data to front-end
						clientList.forEach((elem) => {
							if (elem.serverType == "dashboard") {
								elem.socket.send(JSON.stringify(encapsulator));
							}
						});
					} else {
						// Send encapsulation data to odroid
						clientList.forEach((elem) => {
							if (elem.serverType == "odroid") {
								elem.socket.send(JSON.stringify(Encapsulation));
							}
						});
					}
				}
			});
		}
	});
});
