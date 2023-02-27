const data = require('./utils/data.js')
const http = require("http")

const PORT = 3001

http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if(req.url.includes('rickandmorty/character')){
	  let idUrl = parseInt(req.url.split('/').at(-1))
	  let character = data.find(c => c.id === idUrl)
	  if (character) {
		res.writeHead(200, {'Content-Type' : 'application/json'})
		res.end(JSON.stringify(character))
	  } else {
		res.writeHead(400, {'Content-Type' : 'text/plain'})
		res.end('Character not found')
	  } 
	} else {
		res.writeHead(400, {'Content-Type' : 'text/plain'})
		res.end('Not found')
	  }
  }).listen(PORT, 'localhost')
