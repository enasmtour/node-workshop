var querystring = require('querystring');
const http = require("http");
const router = require("./router");
const server = http.createServer(router);

server.listen(3000, () => {
	console.log(
		"Server is listening on http://localhost:3000. Ready to accept requests!"
	);
});
request.on('end', function () {

    var convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.end();
});