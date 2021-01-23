const { Socket } = require("dgram");
const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

// const JSONParser = require('./externalSocketParser/parser');
// const digest  = require('./Digester/index');
// const encapsulate = require('./Encapsulate/index');

const wss = new WebSocket.Server({ port: 8080, clientTracking: true });
// var clientList = [];

//websocket connection
wss.on("connection", function connection(ws) {
	ws.on("message", (message) => {
		// parsed incoming data from the clients
		const { eventType, data } = JSON.parse(message);

		switch (eventType) {
			// Initial connection
			case "connection":
				ws.clientType = data.clientType;
				ws.send(JSON.stringify({ eventType: "init" }));
				return;
			case "message":
				console.log(ws.clientType);
				return;
			default:
				ws.send(
					JSON.stringify({
						eventType: "error",
						data: { message: "no event of that type exist" },
					})
				);
				return;
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
