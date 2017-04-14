cp config.js.init to config.js and change the credentials

How to debug:

npm install -g node-inspector this installs the debugger package
node-inspector & this opens http://127.0.0.1:8080/?port=5858
node --debug-ark ./app.js this start the app in debug mode