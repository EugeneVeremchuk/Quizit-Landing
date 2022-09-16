import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./build`
const sourceFolder = `./source`

const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/images/`,
		svg: `${buildFolder}/images/svg/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	source: {
		js: `${sourceFolder}/js/index.js`,
		images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${sourceFolder}/images/svg/*.svg`,
		sass: `${sourceFolder}/sass/index.sass`,
		html: `${sourceFolder}/*.pug`,
		files: `${sourceFolder}/files/**/*.*`
	},
   watch: {
		js: `${sourceFolder}/js/**/*.js`,
		sass: `${sourceFolder}/sass/**/*.sass`,
		html: `${sourceFolder}/**/*.pug`,
		images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		svg: `${sourceFolder}/images/svg/*.svg`,
		files: `${sourceFolder}/files/**/*.*`
	},
  clean: buildFolder,
	buildFolder,
	sourceFolder,
	rootFolder,
	ftp: ``
}

export default path