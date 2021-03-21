const WebSocket = require("ws");
const broadcast = require("./utilities/broadcast");

// const { Socket } = require("dgram");
// const { v4: uuidv4 } = require("uuid");

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

		//test logic to see ui commands on the server
		switch (eventType) {
			// Initial connection
			case "connection":
				ws.clientType = data.clientType;
				console.log(`Connected to ${ws.clientType}`);
				ws.send(JSON.stringify({ eventType: "init" }));
				return;

			case "control":
				// const { type, params } = data;
				// if (type === "brake") {
				// 	console.log(params);
				// } else if (type == "sliderBrake") {
				// 	console.log(params + "% of maximum braking force");
				// }
				console.log(message);
				broadcast(wss, message, "pod");
				//For testing
				// testMessage = {
				// 	eventType: "stateUpdate",
				// 	data: { state: { started: false, paused: -1, ended: false } },
				// };
				// broadcast(wss, testMessage, "dashboard");
				return;

			case "stateUpdate":
				broadcast(wss, message, "dashboard");
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
	});
});
