var app = require('../../server.js')


var port = process.env.PORT || 8000;
app.listen(port);
console.log('listening on port:', port);
