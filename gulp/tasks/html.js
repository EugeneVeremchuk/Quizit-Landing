import pug from "gulp-pug"
import versionNumber from 'gulp-version-number'

export const html = () => {
	return config.gulp.src(config.path.source.html)
		.pipe(config.plugins.plumber(
			config.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(pug({
			pretty: true,
			verbose: true
		}))
		.pipe(versionNumber({
			'value': '%DT%',
			'append': {
				'key': '_v',
				'cover': 0,
				'to': [
					'css',
					'js',
				]
			},
			'output': {
				'file': 'gulp/version.json'
			}
		}))
		.pipe(config.plugins.replace(/@img\//g, 'images/'))
		.pipe(config.gulp.dest(config.path.build.html))
		.pipe(config.plugins.browsersync.stream())
}