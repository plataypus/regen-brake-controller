const { Socket } = require("dgram");
const WebSocket = require("ws");

// const JSONParser = require('./externalSocketParser/parser');
// const digest  = require('./Digester/index');
// const encapsulate = require('./Encapsulate/index');

const wss = new WebSocket.Server({ port: 8080, clientTracking: true });
// var clientList = [];
const clients = new Map();

//websocket connection
wss.on("connection", function connection(ws) {
	//websocket message
	// console.log(ws);
	ws.on("message", (message) => {
		// parsed incoming data from sockets
		const { eventType, clientType, data } = JSON.parse(message);

		// Initial connection
		if (eventType === "connection") {
			clients.set(clientType, ws);
			console.log(clients);
			ws.send("hi");

			//set id for the client

			//map id to client types
			//on message -> get id from ws -> get the other client(s) -> send data
		}

		// var parsedData = JSONParser(data);

		// if the socket is just connected, add it to the client list
		// if (parsedData.isNew) {
		// 	parsedData["socket"] = ws;
		// 	clientList.push(parsedData);
		// } else {
		// 	clientList.forEach(function each(client) {
		// 		if (client.socket.readyState === WebSocket.OPEN) {
		// 			if (parsedData.serverType == "odroid") {
		// 				// var error = [];
		// 				// // validation module -- here
		// 				// // Divide incoming data into multiple components
		// 				// var Digestor =  digest(parsedData);
		// 				// // pack all the data to be sent to front-end.
		// 				// var encapsulator = encapsulate(Digestor, error);
		// 				// // Send encapsulation data to front-end
		// 				// clientList.forEach((elem) => {
		// 				//   if (elem.serverType == 'dashboard') {
		// 				//     elem.socket.send(JSON.stringify(encapsulator));
		// 				//   }
		// 				// });
		// 			} else {
		// 				// Send encapsulation data to odroid
		// 				clientList.forEach((elem) => {
		// 					if (elem.serverType == "odroid") {
		// 						elem.socket.send(JSON.stringify(Encapsulation));
		// 					}
		// 				});
		// 			}
		// 		}
		// 	});
		// }
	});
});
