const { Socket } = require("dgram");
const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

// const JSONParser = require('./externalSocketParser/parser');
// const digest  = require('./Digester/index');
// const encapsulate = require('./Encapsulate/index');

const wss = new WebSocket.Server({ port: 8080, clientTracking: true });
// var clientList = [];
const clientsTypeMapping = new Map();
const clientsIdMapping = new Map();

//websocket connection
wss.on("connection", function connection(ws) {
	//websocket message
	// console.log(ws);
	ws.on("message", (message) => {
		// parsed incoming data from sockets
		const { eventType, clientType, data } = JSON.parse(message);

		// Initial connection
		if (eventType === "connection") {
			//set id for the client
			const id = uuidv4();
			ws.id = id;

			clientsTypeMapping.set(clientType, ws);
			clientsIdMapping.set(id, clientType);

			ws.send(JSON.stringify({ eventType: "init", data: { id } }));
			//map id to client types
			//on message -> get id from ws -> get the other client(s) -> send data
		} else {
			console.log(clientsIdMapping.get(ws.id));
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
