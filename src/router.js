const { homeHandler, publicHandler } = require("./handler");
const router = (request, response) => {
	const endpoint = request.url;
	if (endpoint === "/") { 
		
		homeHandler(request, response);
		var allTheData = '';
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});

request.on('end', function () {

    console.log(allTheData);
    response.end();
});
	} else if (endpoint.split(".")[1]) {
		publicHandler(request, response, endpoint);
		var allTheData = '';
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});

request.on('end', function () {

    console.log(allTheData);
    response.end();
});
	}
};

module.exports = router;
