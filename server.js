const Bundler = require('parcel-bundler')
const express = require('express')
const app = express()
const path = require('path')

const PORT = 8080

const PUBLIC_SERVER_FOLDER = './docs'

const bundler = new Bundler(path.join(__dirname, '/src/index.html'), {
	outDir:PUBLIC_SERVER_FOLDER,
	publicUrl:'./'
})

// use the media from the source:
// app.use('/media',express.static(path.join(__dirname,'/src/media')))
// use the compiled data here:
app.use(express.static(path.join(__dirname, PUBLIC_SERVER_FOLDER)))
// use the parcel bundler.
app.use(bundler.middleware())

app.listen(PORT, (error)=>{
	if(error){ console.error(error) }
	console.log(`\nServer Launched at http://localhost:${PORT}`)
})