const Bundler = require('parcel-bundler')
const path = require('path')

const PUBLIC_SERVER_FOLDER = './public'

const OPTIONS = {
	watch:false,
	minify:true,
	hmr:false,
	// publicUrl:PUBLIC_SERVER_FOLDER,
	outDir:PUBLIC_SERVER_FOLDER,
}

const bundler = new Bundler(path.join(__dirname, '/src/index.html'), OPTIONS)

bundler.bundle().then(()=>{
	console.log("BUNDLED!")
})